const http = require("http");
const fs = require("fs");
const port = 3002;
const headerConfig = {
    ContentType: "text/html",
    charset: "utf8"
};

const server = http.createServer((req, res) => {
    const urlInfo = require("url").parse(req.url, 200)
    const name = urlInfo.query.name


  if (!name) {
    fs.readFile("./index.html", (err, data) => {
      res.writeHead(200, headerConfig);
      res.write(data);
      return res.end();
    });
  } else {
      fs.writeFile("tabelaNome.txt", name, (err, data) => {
          res.writeHead(302, {
            location:  '/'
          });
        return res.end();
      });
  }
});

server.listen(port, console.log(`http://localhost:${port}`));
