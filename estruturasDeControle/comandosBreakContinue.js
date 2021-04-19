//break é um comando que causa desvio de fluxo, ele pode ser utilizado em switch, for e while 
//causando a saida do bloco dessas estruturas 

//o continue é uma estrutura que gera desvio de fluxo, pode ser utilizada em for e while 

//é recomendado que evite usar os dos comandos sem real necessidade 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in nums) {
  if (i == 5) {
    break;//o comando break não vai fazer sair do bloco do if e sim do bloco do for 
  }; 
  console.log(`${i} = ${nums[i]}`);
};

for (let y in nums) {
  if (y == 5) {
    continue;//o comando continue vai interromper a repetição atual e pular para a proxima repetição
  };
  console.log(`${y} = ${nums[y]}`);
};