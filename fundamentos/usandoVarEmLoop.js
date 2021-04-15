for (var i = 0; i < 10; i++) {
  console.log(i);
}

//A variavel i extrapola o escopo do for e está disponivel fora dele
console.log(`i = ${i}`);

//Um exemplo do problema gerado por var não possuir escopo de bloco
var funcs = [];

for (var i = 0; i <= 10; i++) {
  funcs.push(function(){
    console.log(i)
  });
}

funcs[2]();
funcs[8]();
