const soma = function (x,y) {
  return x + y;
};

const imprimirRestultado = function (a, b, opreacao = soma) {
  console.log(opreacao(a,b));
};

imprimirRestultado(3, 7);
imprimirRestultado(3, 7, soma);
imprimirRestultado(7, 3, function (x, y) { return x - y; });
imprimirRestultado(3, 7, (x, y) => x * y);

const pessoa = {
  falar: function() {
    console.log("opa");
  },
  imprimirIdade(idade) {
    console.log(`tenho ${idade} anos`);
  },
};

pessoa.falar();
pessoa.imprimirIdade(18);