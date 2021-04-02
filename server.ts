import { serve } from "https://deno.land/std@0.91.0/http/server.ts";
import porfolio from './portfolio.jsx';

const server = serve({ port: 8090 });

console.log("\nServing on http://localhost:8090/\n");

for await (const req of server) {
  req.respond({ body: porfolio });
}