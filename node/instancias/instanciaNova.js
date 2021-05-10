//como retornar uma nova instancia se o node faz cache?
//podemos usar uma factory para retornar um novo objeto

module.exports = () => {
  return {
	  valor: 1,
		inc() {
		  this.valor++;
		}
	};
};
