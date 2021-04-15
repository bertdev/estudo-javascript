{
  {
    {
      {
        var sera = "será???";
      }
    }
  }
}

//nesse caso a variavel será por ser definida com var ultrapassa o escopo em que se encontra
console.log(sera);

function teste() {
  var local = 123;
  console.log(local);
}

teste();

//nesse caso a variavel local vai permanecer visivel só no escopo da função
//console.log(local);

//Váriaveis declaradas com var no geral só possuem dois possiveis escopos: global e de função

//É uma boa dica evitar criar váriaveis no escopo global sempre que possivel,
//isso evita que váriaveis acabem sendo sobreescritas o que pode evitar alguns erros

var numero = 1;
{
  var numero = 2;
  console.log(`Dentro = ${numero}`);
}
console.log(`Fora = ${numero}`);
//Como a váriavel numero não se encontra em um escopo de função, ela se encontra no
//escopo global, logo pode ser acessada em qualquer posição do código 
