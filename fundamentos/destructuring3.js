//utilizando o operador desctructor no contexto de uma função

//objeto como parametro
function rand({min = 0, max = 100}) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

const objTeste = {
  min: 10,
  max: 50
};

console.log("objeto de parametro");
console.log(rand(objTeste));
console.log(rand({min: 40}));
console.log(rand({max: 10}));
console.log(rand({}));

//array como parametro 

function rand2([min = 0, max = 100]) {
  if(min > max) {
    [min, max] = [max, min];
  };
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

const arrayTeste = [10, 50];

console.log("array de parametro");
console.log(rand2(arrayTeste));
console.log(rand2([50]));
console.log(rand2([40, 10]));
console.log(rand2([]));