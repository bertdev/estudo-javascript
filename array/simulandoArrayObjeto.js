//tentando simular um array com um objeto
const quaseArray = { 0: "raphael", 1: "ana", 2: "bia" };
console.log(quaseArray);
Object.defineProperty(quaseArray, "toString", {
  value: function() { return Object.values(this); },
  enumerable: false,
});

console.log(quaseArray[0]);

const arrayDeVerdade = ["raphael", "ana", "bia"];
console.log(quaseArray.toString(), arrayDeVerdade);

