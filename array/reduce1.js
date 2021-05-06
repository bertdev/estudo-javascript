//um metodo que reduzirá o array em um unico dado, possuindo um parametro acumulativo
//que será passado a cada chamada da callback(o resultado de uma callback será passado pra a proxima)
//a primeira execução da callback recebe como parametro o elemento do index 0 e o elemento de indice 1
//o resultado da manipulação desses dados é passado como paramtero para a proxima execução, junto com o proximo elemento 
//os parametros então são o acumulador e o elemento atual, indice e o array

const alunos = [
  { nome: "joão", nota: 7.3, bolsista: false },
  { nome: "maria", nota: 9.2, bolsista: true },
  { nome: "pedro", nota: 9.8, bolsista: false },
  { nome: "ana", nota: 8.7, bolsista: true }
];

const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
  console.log(acumulador, atual);
  return acumulador + atual;
});

console.log(resultado);

//posso passar um valor inicial para o acumulador
const resultado2 = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
  console.log(acumulador, atual);
  return acumulador + atual;
}, 0);//0 é o valor inical do acumulador

