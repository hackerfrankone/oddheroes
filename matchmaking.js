export class MatchmakingQueue {
  constructor(state, env) {
    this.state = state;
    this.players = [];
    this.matches = {};
  }

  async fetch(request) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://oddheroes.online',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    };

    console.log(`Durable Object received ${request.method} request to ${request.url}`);

    if (request.method === 'OPTIONS') {
      console.log('Handling OPTIONS request');
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      console.log('Method not allowed:', request.method);
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.json();
      const { hero, sessionId } = body;

      if (!hero || typeof hero !== 'string' || !sessionId || typeof sessionId !== 'string') {
        console.log('Invalid hero or sessionId:', { hero, sessionId });
        return new Response(
          JSON.stringify({ status: 'error', message: 'Hero and sessionId must be non-empty strings' }),
          { status: 400, headers: corsHeaders }
        );
      }

      console.log('Processing matchmaking for:', { hero, sessionId });

      // Load current queue and matches from storage
      this.players = (await this.state.storage.get('queue')) || [];
      this.matches = (await this.state.storage.get('matches')) || {};

      const now = Date.now();

      // Remove old players from queue (>30 seconds)
      this.players = this.players.filter(player => now - player.timestamp <= 30000);

      // Remove expired matches
      for (const [sid, match] of Object.entries(this.matches)) {
        if (now - match.timestamp > 30000) {
          delete this.matches[sid];
        }
      }

      // Check if this session already has a match
      if (this.matches[sessionId]) {
        const match = this.matches[sessionId];
        delete this.matches[sessionId];
        await this.state.storage.put('matches', this.matches);
        console.log('Match found for sessionId:', sessionId, 'URL:', match.url);
        return new Response(
          JSON.stringify({ status: 'matched', url: match.url }),
          { status: 200, headers: corsHeaders }
        );
      }

      // Add current player if not already in queue
      if (!this.players.find(p => p.sessionId === sessionId)) {
        this.players.push({ hero, id: crypto.randomUUID(), sessionId, timestamp: now });
        await this.state.storage.put('queue', this.players);
      }

      // Match players if possible
      if (this.players.length >= 2) {
        // find a player with a different sessionId
        const player1 = this.players.shift();
        const index = this.players.findIndex(p => p.sessionId !== player1.sessionId);

        if (index === -1) {
          // no different player yet, put player1 back
          this.players.unshift(player1);
          await this.state.storage.put('queue', this.players);
          return new Response(JSON.stringify({ status: 'waiting', message: 'Waiting for another player' }), { status: 200, headers: corsHeaders });
        }

        const player2 = this.players.splice(index, 1)[0];

        // now player1 and player2 are guaranteed to be different sessions
        const gameId = crypto.randomUUID();
        const gameUrl = `https://oddheroes.online/game.html?player1=${encodeURIComponent(player1.hero)}&player2=${encodeURIComponent(player2.hero)}&gameId=${gameId}`;

        this.matches[player1.sessionId] = { url: gameUrl, timestamp: now };
        this.matches[player2.sessionId] = { url: gameUrl, timestamp: now };

        await this.state.storage.put('queue', this.players);
        await this.state.storage.put('matches', this.matches);

        console.log('Match created:', { player1: player1.sessionId, player2: player2.sessionId, gameUrl });

        return new Response(JSON.stringify({ status: 'matched', url: gameUrl }), { status: 200, headers: corsHeaders });
      }

      console.log('Player added to queue, waiting:', sessionId);
      return new Response(JSON.stringify({ status: 'waiting' }), { status: 200, headers: corsHeaders });

    } catch (err) {
      console.error('Request processing error:', err.message, err.stack);
      return new Response(
        JSON.stringify({ status: 'error', message: `Invalid request body: ${err.message}` }),
        { status: 400, headers: corsHeaders }
      );
    }
  }
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://oddheroes.online',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    };

    console.log(`Worker received ${request.method} request to ${request.url}`);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.url.endsWith('/find-match')) {
      try {
        console.log('Accessing MATCHMAKING_QUEUE');
        const id = env.MATCHMAKING_QUEUE.idFromName('global-queue');
        const stub = env.MATCHMAKING_QUEUE.get(id);
        return await stub.fetch(request);
      } catch (err) {
        console.error('Error accessing Durable Object:', err.message, err.stack);
        return new Response(
          JSON.stringify({ status: 'error', message: `Server error: ${err.message}` }),
          { status: 500, headers: corsHeaders }
        );
      }
    }

    return new Response('Not found', { status: 404, headers: corsHeaders });
  }
};
