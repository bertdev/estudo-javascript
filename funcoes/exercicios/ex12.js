const calculaFatorial = numero => {
  let fatorial = 1;
  if(numero == 0 || numero == 0) {
    return 1;
  } else {
    for(let i = numero; i > 0; i--) {
		  fatorial *= i;
		};
		return fatorial;
  };
};

console.log(calculaFatorial(1));
console.log(calculaFatorial(0));
console.log(calculaFatorial(3));
console.log(calculaFatorial(5));
  
