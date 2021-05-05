//algumas funcionalidades usando prototype

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object); 
//todos são functions e possuem o .prototype, podemos adcionar metodos novos a eles assim

String.prototype.reverse = function() {
  return this.split("").reverse().join("");
};

console.log("alucard".reverse());

Array.prototype.first = function() {
  return this[0];
};

console.log([1, 3, 5].first());

//não altere funções que já existam no prototype pois irá gerar efeitos colaterais


