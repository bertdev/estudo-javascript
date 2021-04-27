//criar uma função que o objetivo é resolver a formula de baskara 
//caso delta seja zero retorna uma string falando que não possui raiz
//caso contrario retorna um array com dois valores independente de quantas
//raizes a equação possua baseado no delta


function calculaBaskara(ax2, bx, c) {
 let delta = (bx ** 2) - 4 * ax2 * c;
 if (delta < 0) { 
   return "Delta é negativo";
 };
 let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
 let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
 return [x1, x2];
};

console.log(calculaBaskara(3, -5, 12));
