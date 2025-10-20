const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.removeHeader("<h1>Hello word</h1>");
  }
});

server.listen(port, () => {
  console.log(`ra rodando na porta ${port}`);
});
