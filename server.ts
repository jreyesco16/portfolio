import { serve } from "https://deno.land/std@0.91.0/http/server.ts";

const server = serve({ port: 8080 });

console.log("\nServing on http://localhost:8080/\n");

for await (const req of server) {
  const html = await Deno.readFile('./portfolio.html');
  const decoder = new TextDecoder()
  req.respond({ body: decoder.decode(html) });
}