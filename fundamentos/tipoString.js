const nome = "Herbert";

//retorna o caractere com base no indice
console.log(nome.charAt(2));

//retorna o codigo unicode(html) do caracter com base no indice
console.log(nome.charCodeAt(2));

//retorna o indice em que o caracter passado como parametro se encontra na string
console.log(nome.indexOf("b"));

//retorna uma nova string formada apartir do indice que for passado como parametro
//a partir do indice 3 até o fim forma-se uma string incluindo o caracter do indice 3
console.log(nome.substring(3));
//a partir do indice 0 até o indice 3 forma-se uma string sem incluir o caracter do indice 3
console.log(nome.substring(0, 3));

//concatenação de strings
console.log("meu nome é ".concat(nome).concat("!"));
console.log("meu nome é " + nome + "!");

//substituir parte da string
console.log(nome.replace("r", "l"));

//converter uma string para um array
//pasando como parametro o que será o ponto de separação
console.log("Herbert,Thiago,José".split(","));
