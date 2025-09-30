import { Application, Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import type { Context } from "https://deno.land/x/oak@v12.6.0/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = "Hello from Oak 🚀";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
