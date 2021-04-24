//o this de uma arrow function é ligado ao contexto do local onde ela é escrita
//não sofrendo alteração com os diferentes modos que ela pode ser chamada 

function Pessoa() {
  this.idade = 10;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
};

new Pessoa;
//nesse exemplo acima ocorreria problemas para acessar o this caso
//não fosse utilizado uma arrow function, ao usarmos arrow o this dela 
//aponta para o Pessoa, pois o contexto dela é a function Pessoa