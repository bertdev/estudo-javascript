//uma função recebe como paramtero a altura e taxa de crescimento anual e duas crianças
//calcule se existe uma ciança menor, se a ciança menor ultrapassará a maior e em quantos
//anos isso acontecerá.(usando cm como unidade);

const verificaAlturaCriancas = (altura1, taxa1, altura2, taxa2) => {
  if(altura1 == altura2) {
    if(taxa1 > taxa2) {
      return "A criança 1 irá ficar mais alta que a criança 2 em 1 ano";
    } else if(taxa2 > taxa1) {
      return "A criança 2 irá ficar mais alta que a criança 1 em 1 ano";
    } else {
      return "Ambas as crianças possuem altura e taxa de crescimento iguais";
    };
  } else {
    if(altura1 > altura2) {
      if(taxa1 >= taxa2) {
        return "A criança menor(2) nunca passará a criança maior(1)";
      } else {
        return `A criança menor(2) passará a criança maior(1) em ${calculaAnos(altura1, taxa1, altura2, taxa2)} anos`;
      }
    } else {
      if(taxa2 >= taxa1) {
        return "A criança menor(1) nunca passará a criança maior(2)";
      } else {
        return `A criança menor(1) passará a maior(2) em ${calculaAnos(altura2, taxa2, altura1, taxa1)} anos`;
      }
    };
  };
};

const calculaAnos = (alturaCriancaMaior, taxaCriancaMaior, alturaCriancaMenor, taxaCriancaMenor) => {
  let qtdAnos = 0;
  while(alturaCriancaMaior >= alturaCriancaMenor) {
    alturaCriancaMaior += taxaCriancaMaior;
    alturaCriancaMenor += taxaCriancaMenor;
    qtdAnos++;
  };
  return qtdAnos;
};

console.log(verificaAlturaCriancas(150, 20, 130, 30));