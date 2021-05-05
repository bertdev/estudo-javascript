//metodos mais simples do array
const pilotos = ["vetel", "alonso", "raikkonen", "massa"];
pilotos.pop(); // remove o ultimo elemento do array
console.log(pilotos);

pilotos.push("verstappen");// adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift();// remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("hamiltton");// adiciona um elemento no inicio do array
console.log(pilotos);

//splice pode adiconar e remover elementos do aray
//adicioanar
pilotos.splice(2, 0, "bottas", "massa");
console.log(pilotos);

//remover
pilotos.splice(2, 2);
console.log(pilotos);

//metodo retorna um novo array a partir do indice passado como parametro 
const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 3);// primeiro parametro é onde o novo aray começara, e o ultimo é onde ele para 
//não incluindo o elemento presente no indice de parada
console.log(algunsPilotos2);
