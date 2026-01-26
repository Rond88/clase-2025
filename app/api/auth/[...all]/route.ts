import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

// Wrap the generated handlers so we can log unexpected server errors
const handler = toNextJsHandler(auth);

export const POST = async (req: Request, ctx: any) => {
  try {
    // @ts-ignore - delegate to generated handler
    return await handler.POST(req, ctx);
  } catch (err) {
    console.error("Error en /api/auth handler POST:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const GET = async (req: Request, ctx: any) => {
  try {
    // @ts-ignore
    return await handler.GET(req, ctx);
  } catch (err) {
    console.error("Error en /api/auth handler GET:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
