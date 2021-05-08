//acessando modulos que existem em outras pastas

const moduloA = require("../../sistema-de-modulos/moduloA");
console.log(moduloA.ola);

//acessando modulos que foram instalados com npm e estão disponiveis globalmente ou em node_modules
const _ = require("lodash");

//acessando modulos que já vem com o node por padrão
const http = require("http");
http.createServer((req, res) => {
  res.write("Bom dia!");
  res.end();
}).listen(8080);

