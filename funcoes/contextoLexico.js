const valor = "Global";

function minhaFuncao() {
  //o contexto lexico dessa função foi dentro desse arquivo(globalmente)
  console.log(valor);
};

minhaFuncao();

function exec() {
  const valor = "local";//o contexto lexico dessa const é local 
  minhaFuncao();
  //minhaFuncao irá retornar o valor "Global", pois não possui acesso a constante valor
  //que existe dentro da função exec, pois a declaração dela foi no contexto global e não
  //no contexto da função exec, somente sua chamada está nesse contexto
};

exec();