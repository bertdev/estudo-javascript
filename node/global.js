//assim como no navegador que temos o objeto global window
//no node temos o objeto de nome: global

//tenha muito cuidado mexendo no objeto global pois um problema gerado
//nesse objeto afeta todo o ambiente da aplicação 

//global.MinhaApp = {
//  saudacao() {
//    return "Estou aqui";
//	},
//  nome: "sistema legal"
//};
//
//para essas atribuições estarem disponiveis basta carregar com 
//require('./global); e estarão diponiveis em toda aplicação 
//podendo chamar o objeto assim: MInhaApp.nome, sem a necessidade de usar global antes 
//Dê preferencias para criação de objetos imutaveis se for adicionar eles ao global 
