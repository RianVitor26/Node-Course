const express = require("express");
const port = 3000;
const server = express();
const routes = require("./routes");

server.use(express.json());

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(routes)


server.listen(port, () => console.log(`http://localhost:${port}`));
