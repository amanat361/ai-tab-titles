import { serve } from "bun";
import { readFileSync } from "fs";

const server = serve({
  port: 3000,
  fetch(req) {
    const html = readFileSync("index.html", "utf8");
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
