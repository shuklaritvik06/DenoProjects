import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import {
  get_AllBlogs,
  post_ABlog,
  put_ABlog,
  delete_ABlog
} from "./controller/blogController.ts";

const app = new Application();
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors()); 

app.use(async (context, next) => {
    try {
      await context.send({
        root: `${Deno.cwd()}/public`,
        index: "index.html"
      });
    } catch {
      await next();
    }
  });

router
  .get("/api", get_AllBlogs)
  .post("/api", post_ABlog)
  .put("/api", put_ABlog)
  .delete("/api", delete_ABlog)

app.listen({ port: 5000 });
