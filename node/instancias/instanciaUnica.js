//por padrão o node faz cache de um modulo exportado e importado pela função require 

module.exports = {
  valor: 1,
  inc() {
    this.valor++;
  }
};

//esse objeto terá intancia unica pois o node faz cache dos módulos 
