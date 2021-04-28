//escrever uma função que recebe uma string com uma lista de pontuações em jogos
		//deverá ser retornado quantas vezes ele bateu seu record de pontuação
//e quando(indice) foi a sua pior pontuação

function retornaInformacaoDePontuacao(lista) {
  let pontos = lista.split(" ");
  let recordAtual = 0;
  let menorPonto = 0;
  let contadorQuebraRecord = 0;
  let resultado = [];

  pontos = pontos.map((ponto) => parseInt(ponto));
  ponstos = pontos.forEach((ponto, indice) => {
	  if (indice == 0) {
		  recordAtual = ponto;
		  menorPonto = ponto;
    } else {
		  if(ponto > recordAtual) {
		    recordAtual = ponto;
				contadorQuebraRecord++;
		  };
		  if(ponto < menorPonto) {
		    menorPonto = ponto;
		  };
		};
	});

  resultado.push(contadorQuebraRecord);
  resultado.push(pontos.indexOf(menorPonto) + 1);//somei o 1 pois não existe jogo 0 igual a contagem do array
  console.log(resultado);
};

retornaInformacaoDePontuacao("10 20 20 8 25 3 0 30 1");
