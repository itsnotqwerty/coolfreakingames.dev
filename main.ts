import { Application } from "oak";
import { viewsRouter } from "./src/routes/views.ts";

const PORT = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8001;

const app = new Application();

app.use(viewsRouter.routes());
app.use(viewsRouter.allowedMethods());
app.use(async (context, next) => {
    const root = "./static";
    try { await context.send({ root }); } catch { await next(); }
});

app.listen({ port: PORT });
console.log(`Server is running on http://localhost:${PORT}`);