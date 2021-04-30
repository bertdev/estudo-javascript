//uma função que verifica se duas strings possuem os mesmos caracteres

const verificaAnagrama = (string1, string2) => {
  let qtdCaracteresNaoContidos = 0;
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  string1 = string1.split("");
  string1.forEach(caracter => {
    if(string2.indexOf(caracter) == -1) {
      qtdCaracteresNaoContidos++;
    };
  });

  if(qtdCaracteresNaoContidos != 0) {
    console.log("As strings não possuem os mesmos cacacteres");
  } else {
    console.log("As strings possuem os mesmos caracteres");
  };
};

verificaAnagrama("dracula", "Alucard");
verificaAnagrama("abc", "cba");