export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Forward matchmaking requests to Durable Object
    if (url.pathname === "/find-match") {
      const id = env.MATCH_QUEUE.idFromName("main"); // one global queue
      const obj = env.MATCH_QUEUE.get(id);
      return obj.fetch(request);
    }

    return new Response("Not found", { status: 404 });
  }
};
