//passando parametros entre modulos isso é possivel quando um módulo retorna uma função 

module.exports = function(...nomes) {
  return nomes.map(nome => `Boa semana ${nome}!`);
};

