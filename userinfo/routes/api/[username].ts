import { HandlerContext } from "https://deno.land/x/fresh@1.0.2/server.ts";

export const handler = {
  async POST(_req: Request, _ctx: HandlerContext){
    const {username} = _ctx.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    const res = new Response(JSON.stringify(user));
    res.headers.set("content-type", "application/json");
    return res;
  }
}
