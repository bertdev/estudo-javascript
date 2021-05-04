//cedia de protótipos (prototype chain)
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

//através da cadeia de protótipos podemoa acessar atributos do objeto avo através do 
//objeto filho, pois ele possui referencia para o pai que possui referencia para o avo
console.log(filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
		if(delta + this.velAtual <= this.velMax) {
		  this.velAtual += delta;
		} else {
		  this.velAtul = this.velMax;
		};
	},
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
	}
};

const ferrari = {
  modelo: "F40",
  velMax: 324,//shadowing
};

const volvo = {
  modelo: "V40",
  status() {
		return `${this.modelo}: ${super.status()}`;
	}
};
//assim como usamos o this para referenciarmos o objeto atual do contexto, usamos super para referenciar o prototipo 

//estabelecendo a relação de prototype sem o __proto__
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari.status());
console.log(volvo.status());

//os objetos só mostram os atributos e funções que de fato pertecem a eles
console.log(ferrari, volvo);
