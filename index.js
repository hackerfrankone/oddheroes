export class MatchmakingQueue {
  constructor(state) {
    this.state = state;
    this.queue = [];
    this.matches = {};
  }

  async fetch(request) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://oddheroes.online',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === 'POST') {
      const { hero, sessionId } = await request.json();
      if (!hero || !sessionId) {
        return new Response(JSON.stringify({ status: 'error', message: 'Hero and sessionId are required' }), {
          status: 400,
          headers: corsHeaders
        });
      }

      this.queue = (await this.state.storage.get('queue')) || [];
      this.matches = (await this.state.storage.get('matches')) || {};

      const now = Date.now();
      this.queue = this.queue.filter(player => now - player.timestamp <= 30000);
      for (const [sid, match] of Object.entries(this.matches)) {
        if (now - match.timestamp > 30000) {
          delete this.matches[sid];
        }
      }

      if (this.matches[sessionId]) {
        const match = this.matches[sessionId];
        delete this.matches[sessionId];
        await this.state.storage.put('matches', this.matches);
        return new Response(JSON.stringify({ status: 'matched', url: match.url }), {
          status: 200,
          headers: corsHeaders
        });
      }

      const player = { hero, id: crypto.randomUUID(), sessionId, timestamp: now };
      if (this.queue.find(p => p.sessionId === sessionId)) {
        return new Response(JSON.stringify({ status: 'waiting', message: 'Player already in queue' }), {
          status: 200,
          headers: corsHeaders
        });
      }

      this.queue.push(player);
      await this.state.storage.put('queue', this.queue);

      if (this.queue.length >= 2) {
        const player1 = this.queue.shift();
        const player2 = this.queue.shift();

        if (player1.sessionId === player2.sessionId) {
          this.queue.push(player1);
          await this.state.storage.put('queue', this.queue);
          return new Response(JSON.stringify({ status: 'waiting', message: 'Waiting for another player' }), {
            status: 200,
            headers: corsHeaders
          });
        }

        const gameId = crypto.randomUUID();
        const gameUrl = `https://oddheroes.online/game.html?player1=${encodeURIComponent(player1.hero)}&player2=${encodeURIComponent(player2.hero)}&gameId=${gameId}`;
        this.matches[player1.sessionId] = { url: gameUrl, timestamp: now };
        this.matches[player2.sessionId] = { url: gameUrl, timestamp: now };

        await this.state.storage.put('queue', this.queue);
        await this.state.storage.put('matches', this.matches);

        return new Response(JSON.stringify({ status: 'matched', url: gameUrl }), {
          status: 200,
          headers: corsHeaders
        });
      }

      return new Response(JSON.stringify({ status: 'waiting' }), { status: 200, headers: corsHeaders });
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }
}

// Worker entry point to route requests to the Durable Object
export default {
  async fetch(request, env) {
    const id = env.MATCHMAKING_QUEUE.idFromName('matchmaking');
    const stub = env.MATCHMAKING_QUEUE.get(id);
    return stub.fetch(request);
  }
};
