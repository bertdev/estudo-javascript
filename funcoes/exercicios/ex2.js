//criar uma função que recebe os 3 lados de um triangulo e retorna o seu tipo 

function retornaTipoDeTriangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado1 == lado3) {
    console.log("O seu triângulo é equilatero");
	} else if(lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {
    console.log("O seu triângulo é isoceles");		
	}	else {
    console.log("O Seu triângulo é escaleno");
  };
};

retornaTipoDeTriangulo(2, 3, 2);//isoceles
retornaTipoDeTriangulo(3, 3, 3);//equilatero
retornaTipoDeTriangulo(2, 3, 5);//escaleno
