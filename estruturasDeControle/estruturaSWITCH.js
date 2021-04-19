//estrutura de controle para seleções multiplas 

const imprimirResultado = nota => {
  switch(Math.floor(nota)) {
    case 10:
    case 9://o código abaixo será executado se o valor passado para o switch for 10 ou 9
      console.log(`Quadro de honra com nota ${Math.floor(nota)}`);
      break;
    case 8:
    case 7:
      console.log(`Aprovado com nota ${Math.floor(nota)}`);
      break;
    case 6:
    case 4:
      console.log(`Recuperação com nota ${Math.floor(nota)}`);
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log(`Reprovado com nota ${Math.floor(nota)}`);
      break;
    default:
      console.log(`${Math.floor(nota)} não é uma nota válida`);
  };
};

imprimirResultado(9);
imprimirResultado(8);
imprimirResultado(6);
imprimirResultado(3);
imprimirResultado(-1);

//switch recebe como parametro um valor que será comparado por igualdade estrita (===)
//con os valores de cada case, no case que a resposta da comparação for true
//o código associado a esse respectivo case será executado