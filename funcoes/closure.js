//Closure é o escopo criado quando definimos uma função 
//esse escopo permite uma função acessar e manipular as variaveis
//declaradas externamente a essa função

//contexto léxico em ação!

const x = "global";

function fora() {
  //essa função foi declarada no contexto global do arquivo
  const x = "local";
  function dentro() {
    //essa função foi declarada no contexto local da função fora 
    return x;
  };
  return dentro;
};

const minhaFuncao = fora();//recebera a função dentro

console.log(minhaFuncao());
//mesmo sendo armazenada na constante minhaFuncao(que pertence ao contexto global),
//a função dentro possui o contexto local da função fora, assim, retornando o valor
//da constante x presente no mesmo contexto(local) ao invés da constante x do contexto global 

//o local fisico onde a função foi declarada no código dita muito o contexto lexico da função 