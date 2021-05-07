//diferença que existe em ter um código mais imperativo e declarativo 

const alunos = [
  { nome: "joão", nota: 7.9 },
  { nome: "maria", nota: 9.2 }
];

//abordagem imperativa - calculando média
let total = 0;
for (let i = 0; i < alunos.length; i++) {
  total += alunos[i].nota;
};
console.log(total / alunos.length);

//abordagem declarativa - calculando média 
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);

//no codigo imperativo o foco é mais no como uma ação deve ser feita, do que o que deve ser feito
//no declarativo, o que deve ser feito é o foco, e o como fica de uma forma mais interna no código
//
//no código imperativo de exemplo temos o "como" da ação muito mais explicito e detalhado 
//no código declarativo de exemplo temos "o que deve ser feito" como foco, deixamos map e reduce realizar
//a ação passando só os criterios(que podem ser reutilizados futuramente)

//no declarativo possuimos um código mais desestruturado, que facilita também o reuso, a forma de escrita fica mais clara 
//
