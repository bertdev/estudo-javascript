//criando um metodo que simule um forEach
const aprovados = ["Agatha", "Aldo", "Beatriz", "Carlos"];

Array.prototype.paraCada = function(fun) {
  for(let i = 0; i < this.length; i++) {
		fun(this[i], i, this);
	};
};

aprovados.paraCada(aprovado => console.log(aprovado));

