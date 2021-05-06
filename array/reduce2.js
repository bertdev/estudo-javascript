//praticando reduce

const alunos = [
  { nome: "joão", nota: 7.3, bolsista: false },
  { nome: "maria", nota: 9.2, bolsista: true },
  { nome: "pedro", nota: 9.8, bolsista: false },
  { nome: "ana", nota: 8.7, bolsista: true }
];

const soBooleanos = aluno => aluno.bolsista;
//todos os alunos são bolsistas?
console.log(alunos.map(soBooleanos).reduce((acumulador, atual) => acumulador && atual));
//algum aluno é bolsista 
console.log(alunos.map(soBooleanos).reduce((acumulador, atual) => acumulador || atual));

