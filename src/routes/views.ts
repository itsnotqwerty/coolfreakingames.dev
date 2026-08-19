/**
 * Static view serving. Only this module registers routes.
 */
import { Context, Router } from "oak";

export const viewsRouter = new Router();

async function readView(name: string): Promise<string | null> {
  try {
    return await Deno.readTextFile(`./static/views/${name}.html`);
  } catch {
    return null;
  }
}

async function serveView(
  context: Context,
  name: string,
): Promise<void> {
  const body = await readView(name);
  if (body !== null) {
    context.response.type = "text/html";
    context.response.body = body;
  } else {
    context.response.status = 404;
    context.response.type = "text/html";
    context.response.body = await readView("404") ?? "View not found";
  }
}

viewsRouter.get("/", (context) => serveView(context, "index"));
viewsRouter.get("/:view.html", (context) => {
  const view = context.params.view;
  if (view) {
    return serveView(context, view);
  }
  context.response.status = 404;
  context.response.body = "View not provided";
});
