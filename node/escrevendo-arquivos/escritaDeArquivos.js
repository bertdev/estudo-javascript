//para escrevermos arquivos também usamos o modulo fs 

const fs = require("fs");

const produto = {
  nome: "Celular",
  preco: 1244,
  desconto: 0.15
};

//passaremos como prametro o caminho do arquivo a ser criado com o nome do arquivo 
//como segundo parametro passaremos o conteudo do arquivo 
//e em seguida uma callback que recebe apenas o erro como parametro 
fs.writeFile(__dirname + "/arquivo.json", JSON.stringify(produto), err => {
  console.log(err || "Arquivo Salvo");
}); 

