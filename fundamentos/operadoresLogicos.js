//exemplo para entender a utilização de operadores lógicos:
//você irá realizar dois trabalhos:
//se os dois trabalhos derem certo: irá comprar uma tv de 50 polegadas (operador e)
//se somente um dos dois der certo: irá comparar uma tv de 34 polegadas (operador ou exclusivo)
//se pelo menos um dos dois der certo: irá tomar sorvete na ida ao shopping para comparar a tv (operador ou)
//se nenhum der certo: não comprará tv e não tomará sorvete (operador de negação)
//obs: operadores lógicos possuem operadores binarios e unarios 

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;//operador ou ||
  const comprarTv50 = trabalho1 && trabalho2;//operador e &&
  //const comprarTv34 = !!(trabalho1 ^ trabalho2);
  //para fazer ou exclusivo no js precisamos usar o operador ou exclusivo bit a bit ^ (bitwise xor)
  //pois js não possui um operador lógico pra isso fora de operações bit a bit
  const compararTv34 = trabalho1 != trabalho2;//simulaçãod e ou exclusivo
  const manterSaudavel = !comprarSorvete;//operador negação !(unario)

  return {comprarSorvete, comprarTv50, compararTv34, manterSaudavel};
  //objeto é um conjunto de pares chave/valor, mas se a variavel que você passa como valor
  //recebe o mesmo nome da chave, podemos passar somente o valor, omitindo a chave 
};

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
