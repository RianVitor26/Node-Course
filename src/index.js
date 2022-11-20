const fs = require("fs");

if (!fs.existsSync("./fsfile")) {
  console.log("Pasta n encontrada, criando...");
  fs.mkdir("fsfile", () => {
    console.log("Criado com sucesso!");
  });
} else {
  fs.existsSync("./fsfile");
  console.log("Pasta encontrada!");
}
