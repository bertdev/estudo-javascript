for (let i = 0; i < 10; i++) {
  console.log(i);
}

//A variavel i por ser declarada com let não está disponivel fora do escopo de bloco
//console.log(`i = ${i}`);

//Problema historico causado por conta do operador var não possuir escopo de bloco sendo
//resolvido usando let

let funcs = [];

for (let i = 0; i <= 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();
