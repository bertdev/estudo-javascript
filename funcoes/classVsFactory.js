//comparação de uma class com uma factory

//classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`meu nome é ${this.nome}`);
  }
}

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

//a utilização de uma class pode gerar alguns erros devido ao this que pode variar 