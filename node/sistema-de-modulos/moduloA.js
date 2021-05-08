//uma aplicação em node é organizada em pastas e arquivos, cada arquivo representando um módulo
//a priori um módulo possui um leve encapsulamento, tudo que é escrito dentro do módulo, só é visivel dentro dele 
//para que isso seja tornado público, é necessario exportar/importar 

//formas de deixar algo visivel para os outros módulos
this.ola = "Fala pessoal";
exports.bemVindo = "Bem vindo ao node!";
module.exports.ateLogo = "Até o proximo exemplo";

//outra forma de exportar alguma propriedade no modulo b
//
