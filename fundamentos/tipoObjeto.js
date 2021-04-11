const prod1 = {};
console.log(prod1);

//definindo propriedades do objeto dinamicamente
prod1.nome = "Celular muito bom";
prod1.preco = 555;
prod1["Desconto bom"] = 0.10;//evitar propriedades com espaço no nome
console.log(prod1);

//definindo propriedades do objeto pela notação literal
const prod2 = {
  nome: "Outro celular bom",
  preco: 593,
  objt: {
    blabla: "só exemplo de objeto dentro de objeto",
    objeto: {
      bla: "exemplo dado"
    }
  }
};
console.log(prod2);
console.log(typeof prod1);
