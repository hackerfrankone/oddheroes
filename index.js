const queue = [];

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });

  if (request.method === 'POST') {
    try {
      const { hero } = await request.json();
      const player = { hero, id: crypto.randomUUID() };
      queue.push(player);

      if (queue.length >= 2) {
        const player1 = queue.shift();
        const player2 = queue.shift();

        return new Response(JSON.stringify({
          status: 'matched',
          url: `https://oddheroes.online/game.html?player1=${encodeURIComponent(player1.hero)}&player2=${encodeURIComponent(player2.hero)}&gameId=${crypto.randomUUID()}`
        }), { status: 200, headers: corsHeaders });
      }

      return new Response(JSON.stringify({ status: 'waiting' }), { status: 200, headers: corsHeaders });
    } catch (err) {
      return new Response(JSON.stringify({ status: 'error', message: err.message }), { status: 500, headers: corsHeaders });
    }
  }

  return new Response('Method not allowed', { status: 405, headers: corsHeaders });
}
