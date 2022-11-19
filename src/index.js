const http = require("http");
const fs = require("fs");
const port = 3002;
const headerConfig = {
    ContentType: "text/html",
    charset: "utf8"
};

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.writeHead(200, headerConfig);
    res.write(data);
    return res.end();
  });
});

server.listen(port, console.log(`http://localhost:${port}`));
