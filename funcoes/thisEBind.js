const pessoa = {
  saudacao: "Bom dia",
  falar: function() {
    console.log(this.saudacao);//this nesse contexto aponta para objeto pessoa 
  }
};

pessoa.falar();

//this nesse contexto não aponta mais para o pessoa, por isso não possui a propriedade saudação
const falar = pessoa.falar;
falar();//conflito entre pradigma funcional e OO

//uma função possui a função bind: que recebe o objeto para onde o this irá apontar 
const falarDePessoa = pessoa.falar.bind(pessoa);
//nesse caso dentro da função falar, o this sempre será resolvido para o objeto pessoa
falarDePessoa();

