export default {
       async fetch(request, env, ctx) {
         const corsHeaders = {
           'Access-Control-Allow-Origin': 'https://oddheroes.online',
           'Access-Control-Allow-Methods': 'POST, OPTIONS',
           'Access-Control-Allow-Headers': 'Content-Type',
           'Access-Control-Max-Age': '86400'
         };
         console.log(`Received ${request.method} request to ${request.url}`);
         if (request.method === 'OPTIONS') {
           console.log('Handling OPTIONS request');
           return new Response(null, { status: 204, headers: corsHeaders });
         }
         if (request.method === 'POST') {
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
             if (!env.MATCHMAKING_KV) {
               console.error('KV namespace MATCHMAKING_KV is not bound');
               return new Response(
                 JSON.stringify({ status: 'error', message: 'Server configuration error: KV namespace not bound' }),
                 { status: 500, headers: corsHeaders }
               );
             }
             let queue, matches;
             try {
               console.log('Reading queue from KV storage');
               queue = (await env.MATCHMAKING_KV.get('queue', { type: 'json' })) || [];
               console.log('Reading matches from KV storage');
               matches = (await env.MATCHMAKING_KV.get('matches', { type: 'json' })) || {};
             } catch (err) {
               console.error('Storage read error:', err.message, err.stack);
               return new Response(
                 JSON.stringify({ status: 'error', message: `Failed to read from storage: ${err.message}` }),
                 { status: 500, headers: corsHeaders }
               );
             }
             const now = Date.now();
             queue = queue.filter(player => now - player.timestamp <= 30000);
             for (const [sid, match] of Object.entries(matches)) {
               if (now - match.timestamp > 30000) {
                 delete matches[sid];
               }
             }
             if (matches[sessionId]) {
               const match = matches[sessionId];
               delete matches[sessionId];
               try {
                 console.log('Writing updated matches to KV storage');
                 await env.MATCHMAKING_KV.put('matches', JSON.stringify(matches));
               } catch (err) {
                 console.error('Storage write error (matches):', err.message, err.stack);
               }
               console.log('Match found for sessionId:', sessionId, 'URL:', match.url);
               return new Response(
                 JSON.stringify({ status: 'matched', url: match.url }),
                 { status: 200, headers: corsHeaders }
               );
             }
             const player = { hero, id: crypto.randomUUID(), sessionId, timestamp: now };
             if (queue.find(p => p.sessionId === sessionId)) {
               console.log('Player already in queue:', sessionId);
               return new Response(
                 JSON.stringify({ status: 'waiting', message: 'Player already in queue' }),
                 { status: 200, headers: corsHeaders }
               );
             }
             queue.push(player);
             try {
               console.log('Writing queue to KV storage');
               await env.MATCHMAKING_KV.put('queue', JSON.stringify(queue));
             } catch (err) {
               console.error('Storage write error (queue):', err.message, err.stack);
               return new Response(
                 JSON.stringify({ status: 'error', message: `Failed to write queue to storage: ${err.message}` }),
                 { status: 500, headers: corsHeaders }
               );
             }
             if (queue.length >= 2) {
               const player1 = queue.shift();
               const player2 = queue.shift();
               if (player1.sessionId === player2.sessionId) {
                 queue.push(player1);
                 try {
                   console.log('Writing queue to KV storage (same player)');
                   await env.MATCHMAKING_KV.put('queue', JSON.stringify(queue));
                 } catch (err) {
                   console.error('Storage write error (queue):', err.message, err.stack);
                 }
                 console.log('Same player detected, waiting for another:', player1.sessionId);
                 return new Response(
                   JSON.stringify({ status: 'waiting', message: 'Waiting for another player' }),
                   { status: 200, headers: corsHeaders }
                 );
               }
               const gameId = crypto.randomUUID();
               const gameUrl = `https://oddheroes.online/game.html?player1=${encodeURIComponent(player1.hero)}&player2=${encodeURIComponent(player2.hero)}&gameId=${gameId}`;
               matches[player1.sessionId] = { url: gameUrl, timestamp: now };
               matches[player2.sessionId] = { url: gameUrl, timestamp: now };
               try {
                 console.log('Writing queue and matches to KV storage');
                 await env.MATCHMAKING_KV.put('queue', JSON.stringify(queue));
                 await env.MATCHMAKING_KV.put('matches', JSON.stringify(matches));
               } catch (err) {
                 console.error('Storage write error (queue/matches):', err.message, err.stack);
                 return new Response(
                   JSON.stringify({ status: 'error', message: `Failed to write to storage: ${err.message}` }),
                   { status: 500, headers: corsHeaders }
                 );
               }
               console.log('Match created:', { player1: player1.sessionId, player2: player2.sessionId, gameUrl });
               return new Response(
                 JSON.stringify({ status: 'matched', url: gameUrl }),
                 { status: 200, headers: corsHeaders }
               );
             }
             console.log('Player added to queue, waiting:', sessionId);
             return new Response(
               JSON.stringify({ status: 'waiting' }),
               { status: 200, headers: corsHeaders }
             );
           } catch (err) {
             console.error('Request processing error:', err.message, err.stack);
             return new Response(
               JSON.stringify({ status: 'error', message: `Invalid request body: ${err.message}` }),
               { status: 400, headers: corsHeaders }
             );
           }
         }
         console.log('Method not allowed:', request.method);
         return new Response('Method not allowed', { status: 405, headers: corsHeaders });
       }
     };
