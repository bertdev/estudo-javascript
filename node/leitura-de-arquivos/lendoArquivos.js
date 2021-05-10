//no proprio node já vem o modulo filesistem ou fs, que é responsavel não só
//pela leitura de arquivo mas também pela escrita, verificação de conteudo de arquivos e pastas, entre outros 

const fs = require("fs");
//caminho do arquivo que será lido 
const caminho = __dirname + "/arquivo.json"; 

//lendo um arquivo de forma sincrôna
//para arquivos pesados a leitura sincrôna irá fazer o processamento do node
//parar até que seja concluida 

//passaremos o caminho do arquivo e o tipo de encode
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//lendo um arquivo de forma assincrôna
//no lugar de receber o conteudo como resposta do metodo, passaremos uma callback
//que será executada após a leitura do arquivo
//o primeiro elemento da callback deve ser o error, o segundo é o conteudo 
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});


//especificamente para arquivo json existe uma forma muito mais
//simples de leitura desses arquivos 
const config = require("./arquivo.json");
console.log(config.db);

//leitura de uma pasta
//como primeiro parametro passamos o diretorio(__dirname faz referencia ao diretorio atual)
fs.readdir(__dirname, (err, arquivos) => {
  console.log("conteudo dessa pasta");
  console.log(arquivos);
});

