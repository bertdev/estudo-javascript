function verificaAnoBissexto(ano) {
  if(ano % 400 == 0) {
		console.log("é ano bissexto");
		return true; 
  } else if(ano % 100 == 0) {
		console.log("é ano bissexto");
		return true;
  } else if(ano % 4 == 0) {
		console.log("é bissexto");
		return true;
  } else {
		console.log("não é bissexto");
    return false;
  };
};

console.log(verificaAnoBissexto(400));
console.log(verificaAnoBissexto(2016));
console.log(verificaAnoBissexto(2011));
