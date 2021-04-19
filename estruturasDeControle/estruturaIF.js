function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log(`Aprovado com ${nota}`);
  };
};

soBoaNoticia(8);
soBoaNoticia(3);

//estrutura if() recebe a condição, sempre que a condição for true executará o código, 
//caso false não executa

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log(`É verdade... ${valor}`);
  };
};

//condições para if não precisam ser operações relacionais ou lógicas, 
//podem ser valores que sejam convertidos para true ou false
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(1);
seForVerdadeEuFalo("opa");
seForVerdadeEuFalo({});
seForVerdadeEuFalo(true);
seForVerdadeEuFalo(null);