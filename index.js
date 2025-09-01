const queue = [];
const matches = {};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://oddheroes.online',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method === 'POST') {
    try {
      const { hero, sessionId } = await request.json();
      if (!hero || !sessionId) {
        return new Response(JSON.stringify({ status: 'error', message: 'Hero and sessionId are required' }), {
          status: 400,
          headers: corsHeaders
        });
      }

      const now = Date.now();
      queue.forEach((player, index) => {
        if (now - player.timestamp > 30000) {
          delete matches[player.sessionId];
          queue.splice(index, 1);
        }
      });

      for (const [sid, match] of Object.entries(matches)) {
        if (now - match.timestamp > 30000) {
          delete matches[sid];
        }
      }

      if (matches[sessionId]) {
        const match = matches[sessionId];
        delete matches[sessionId];
        return new Response(JSON.stringify({ status: 'matched', url: match.url }), {
          status: 200,
          headers: corsHeaders
        });
      }

      const player = { hero, id: crypto.randomUUID(), sessionId, timestamp: now };

      if (queue.find(p => p.sessionId === sessionId)) {
        return new Response(JSON.stringify({ status: 'waiting', message: 'Player already in queue' }), {
          status: 200,
          headers: corsHeaders
        });
      }

      queue.push(player);

      if (queue.length >= 2) {
        const player1 = queue.shift();
        const player2 = queue.shift();

        if (player1.sessionId === player2.sessionId) {
          queue.push(player1);
          return new Response(JSON.stringify({ status: 'waiting', message: 'Waiting for another player' }), {
            status: 200,
            headers: corsHeaders
          });
        }

        const gameId = crypto.randomUUID();
        const gameUrl = `https://oddheroes.online/game.html?player1=${encodeURIComponent(player1.hero)}&player2=${encodeURIComponent(player2.hero)}&gameId=${gameId}`;
        matches[player1.sessionId] = { url: gameUrl, timestamp: now };
        matches[player2.sessionId] = { url: gameUrl, timestamp: now };

        return new Response(JSON.stringify({ status: 'matched', url: gameUrl }), {
          status: 200,
          headers: corsHeaders
        });
      }

      return new Response(JSON.stringify({ status: 'waiting' }), { status: 200, headers: corsHeaders });
    } catch (err) {
      return new Response(JSON.stringify({ status: 'error', message: err.message }), {
        status: 500,
        headers: corsHeaders
      });
    }
  }

  return new Response('Method not allowed', { status: 405, headers: corsHeaders });
}
