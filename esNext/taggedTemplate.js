//processar template string com uma função 
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "outra string";
};

const aluno = "Gui";
const situacao = "aprovado";
console.log(`${aluno} está ${situacao}`);
console.log(tag `${aluno} está ${situacao}`);
