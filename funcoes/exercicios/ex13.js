//verificar se o dia da semana é dia util ou não
const verificaDiaUtil = dia => {
  switch(dia) {
    case 2:
		case 3: 
		case 4: 
    case 5:
    case 6:
		   console.log("dia util");
		   break;
		case 1:
		case 7:
		  console.log("não é dia util");
		    break;
    default:
		  console.log("não é um dia válido");
		    break;
  };
};

verificaDiaUtil(1);
verificaDiaUtil(4);

