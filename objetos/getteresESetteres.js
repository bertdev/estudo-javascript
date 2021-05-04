//uma das formas para garantir o encapsulamento nos seus objetos é a criação e utilização de atributos 
//privados e possuir metodos que permitem a recuperação e manipulação deles de forma mais controlada 

//no javascript não existe como definir uma variavel privada no objeto, existe a convensão que os atributos
//começados com underline são "Privados", não devendo serem acessados diretamente mas por uso de metodos 
//getters e setters 

//obs: js não permite sobrecarga de metodos, ou seja, vários metodos com mesmo nome mas paramteros 
//diferentes, somente se os dois metodos foram um get e um set 

const sequencia = {
  _valor: 1,
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if(valor > this._valor) {
      this._valor = valor;
    };
  }
};

console.log(sequencia);

//acessanto o metodo get e set
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 200;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 100;//não será atribuido pelo set pois não passa na condicional 
console.log(sequencia.valor, sequencia.valor);