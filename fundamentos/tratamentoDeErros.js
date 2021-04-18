function tratarErroELancar(erro) {
  throw "ops, aconteceu um erro...";
};

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("final");
  };
};

const objTeste = { name: "herbert" };

imprimirNomeGritado(objTeste);

//try: é um bloco de código que dentro dele tem um código que pode gerar algum erro
//catch: é o bloco de código que armazena o código que deverá ser executado se o código contido
//em try gerar um erro 
//throw: é o comando que permite lançar uma mensagem/aviso de erro personalizado sempre que ele acontecer 
//finally: é um bloco de código que será executado mesmo que ocorra ou não o erro 