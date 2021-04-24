//testando comportamentos do this em arrow function

let comparaComThis = function (param) {
  console.log(param === this);
};

comparaComThis(global);
//this dessa função é o this do escopo global, cuidado ao atribuir propriedades a ele 

const obj = {};
comparaComThis = comparaComThis.bind(obj);
//agora o this dela aponta pra o obj 

comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(param === this);

comparaComThisArrow(global);
comparaComThisArrow(module.exports);
//nessa função arrow o this aponta para o contexto global do arquivo que é o module.exports
//diferente do contexto global do node que é o global
//obs: o objeto global quando usamos função normal em navegador é o window 

//testando se o this de uma arrow se altera com bind
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);//mesmo com bind não se altera 
comparaComThisArrow(module.exports);


