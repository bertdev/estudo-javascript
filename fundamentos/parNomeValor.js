//par nome e valor
const nome = "herbert"; //contexto léxico 1

// contexto léxico é o nivel(local/contexto) onde a váriavel foi definida fisicamente no código

function exec() {
  const nome = "henrique"; //contexto léxico 2s
  return nome;
}

//objetos são conjuntos aninhados de de pares nome/valor

//um objeto dentro de outro pode ter propriedades com o mesmo nome das propriedades
//do seu objeto pai pois são contextos diferentes

const aluno = {
  nome: "thiago",
  idade: 18,
  endereco: {
    rua: "rua que não existe",
    numero: 20
  }
};

console.log(nome);
console.log(exec());
console.log(aluno.nome);

console.log(aluno);
