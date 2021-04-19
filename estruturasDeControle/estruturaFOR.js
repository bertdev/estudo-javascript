//estrutura de repetição para quando precisamos de uma quantidade determinada de repetições

//fazendo repetição com numero definido com o while
let contador = 1;
while (contador <= 4) {
  console.log(`contador = ${contador}`);
  contador++;
};

//fazendo a repetiçãocom o for
//for recebe: 1- declaração do contador, 2- condição de controle, 3- manipulação do contador
for(let i = 1; i <= 4; i++) {
  console.log(`contador = ${i}`);
};

//percorrento array com for
const notasAlunos = [10, 8.3, 5.2, 7.5];
for(let i = 0; i < notasAlunos.length; i++) {
  console.log(`Aluno ${i+1} tirou nota ${notasAlunos[i]}`);
};