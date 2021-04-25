//comparação de uma function construtora e uma factory

//construtora
function Pessoa(nome) {
  this.nome = nome;

  this.falar = () => console.log(`meu nome é ${this.nome}`);
};

const pess1 = new Pessoa("herbert");
pess1.falar();

//factory
const criarPessoa = nome => {
  return {
    nome: nome,
    falar: () => console.log(`meu nome é ${nome}`),
  };
};

const pess2 = criarPessoa("henrique");
pess2.falar();

//o uso this em uma constructor gera o mesmo problema que em classes, pode variar dependendo
//de onde ela é executada 