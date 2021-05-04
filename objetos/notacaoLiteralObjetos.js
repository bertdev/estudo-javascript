//observando melhorias na notação literal de objetos com ecmaScript 2015

const a = 1;
const b = 2;
const c = 3;

//quando o nome da propriedade é o mesmo nome da variavel passada como valor 
//podemos simplificar a notação
const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2);

//outra melhoria é quando queremos criar um atributo de um objeto a partir de uma string 
const nomeAttr = "nota";
const valorAtttr = 7.5;

const obj3 = {};
obj3[nomeAttr] = valorAtttr;
console.log(obj3);

const obj4 = {[nomeAttr]: valorAtttr};
console.log(obj4);

//definição de funções dentro de um objeto também foi simplificada 
const obj5 = {
  funcao1: function() {
    //antiga notação
  },
  funcao2() {
    //notação simplificada 
  }
};

console.log(obj5);
