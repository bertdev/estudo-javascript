//passamos uma função(callback) para outra função, a função callback será executada sempre 
//que algum evento aconteça 

//no exemplo abaixo o evento que irá disparar a função callbak será cada repetição do forEach

const alunos = ["herbert", "henrique", "thiago", "josé"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}: ${nome}`);
};

//imprimir é a função callback passado para o forEach
alunos.forEach(imprimir);

//passando uma function anonima com callback
alunos.forEach(function(aluno) {
  console.log(aluno);
});

//passando arrow function como callback
alunos.forEach(aluno => console.log(aluno));