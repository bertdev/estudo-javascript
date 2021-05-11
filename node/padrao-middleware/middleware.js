//middleware pattern (chain of resposability)

//contexto é o objeto que contem os dados que serão passados entre as
//funções já que não existe um acoplamento entre elas
//next é a função de parametro que indica o proximo passo

const passo1 = (contexto, next) => {
  contexto.valor1 = "middleware1";
  next();
};

const passo2 = (contexto, next) => {
  contexto.valor2 = "middleware2";
  next();
};

const passo3 = contexto => contexto.valor3 = "middleware3";

const exec = (contexto, ...middlewares) => {
  const execMiddleware = indice => {
    middlewares && indice < middlewares.length &&
      middlewares[indice](contexto, () => execMiddleware(indice + 1));
  };
  execMiddleware(0);
};

const contexto = {};
exec(contexto, passo2, passo3);
console.log(contexto);
