// function Pessoa() {
//   this.idade = 18;

//   setInterval(function() {
//     this.idade++;
//     console.log(this.idade);
//   }, 1000);
// };

// new Pessoa;

//lembrando: o this pode variar de acordo com quem está invocando a função
//nesse exemplo a chamada através do setInterval vai fazer o this variar
//o this dentro de setInterval não aponta para o objeto pessoa

//Resolvendo
// maneira 1
// function Pessoa() {
//   this.idade = 10;

//   setInterval(function() {
//     this.idade++;
//     console.log(this.idade);
//   }.bind(this),1000);
// };

// new Pessoa;

// maneira 2
function Pessoa() {
  this.idade = 10;

  const self = this;
  setInterval(function() {
    self.idade++;
    console.log(self.idade);
  },1000);
};

new Pessoa;