//no js você pode usar uma função para gerar objetos a partir da instancia de uma função
//utilizamos o operadro new para instanciar uma função para gerar um objeto 
//essa função é chamada de função construtora 

//obs: na declaração de uma função construtora se quiser criar um atributo privado,
//use let, se quiser declarar um atributo publico, use o this;

function Carro (velocidadeMaxima = 200, delta = 5) {
  //atributo privado - pertençe só ao escopo da função e não poderar ser acessado
  //após a instancia da função
  let velocidadeAtual = 0;

  //metodo publico 
  this.acelerar = () => {
    if(velocidadeAtual + delta < velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //metodo publico
  this.getVelocidadeAtual = () => velocidadeAtual;

};

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
