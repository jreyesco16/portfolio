import { serve } from "https://deno.land/std@0.91.0/http/server.ts";

const server = serve({ port: 3000 });

console.log("\nServing on http://localhost:3000/\n");

for await (const req of server) {

  console.log(req.url)

  if(req.url == "/") {
    const html = await Deno.readFile('./portfolio.html');
    const decoder = new TextDecoder()
    req.respond(
      { 
        body: decoder.decode(html)

      }
    );
  }else if (req.url == "avatar"){
    const avatar = await Deno.readFile("./IMG_3717.JPG");
    const decoder = new TextDecoder()
    req.respond(
      {
        headers: new Headers({"Content-type" : "image/png"}),
        body: decoder.decode(avatar)
      }
    )
  }
}