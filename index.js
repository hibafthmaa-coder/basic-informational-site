const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/") {
    filePath = "index.html";
  } else if (req.url === "/about") {
    filePath = "about.html";
  } else if (req.url === "/contact-me") {
    filePath = "contact-me.html";
  } else {
    filePath = "404.html";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Internal Server Error");
      return;
    }

    if (filePath === "404.html") {
      res.writeHead(404, { "Content-Type": "text/html" });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
    }

    res.end(data);
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});