//criar 2 vetores e adicionar o segundo no primeiro vetor, no final exibir os dois 
const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

const adicionaVetor = (vetorBase, vetorAdicionar) => {
  vetorAdiciona.forEach(element => vetorBase.push(element));
  console.log(vetorBase, vetorAdicionar);
};

adicionaVetor(vetorPilha, vetorAdiciona);