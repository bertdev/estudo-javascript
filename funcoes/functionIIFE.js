//é uma função anonima autoinvicada, ela é executada logo em seguida da sua declaração 
//sua utilidade: quando você quer fugir do escopo global(principalmente no navegador)
//tudo dentro da IIFE será escopo local da função
//IIFE -> Immediataly Invoked Function Expression

(function () {
    console.log("Será executada imediatamente");
    console.log("fugindo do escopo global");
})();
