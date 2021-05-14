//assync await permite você trabalhar com código assincrono de forma mais
//proxima de um código sincrono simplificando o uso de promise
//ES8
function falarFraseDepoisDe(segundos) {
  const frase = "Amigo estou aqui";
  return new Promise((resolve, reject) => {
	  setTimeout(() => resolve(frase), segundos * 1000);
	});
};

let falar = async () => {
//quando usarmos await, a função só executará o proximo passo quando
//quando a promise der um retorno 
		const fraseParaFalar = await falarFraseDepoisDe(5);
		return fraseParaFalar;
};//retorna um objeto AsyncFunction

falar()
		.then(frase => console.log(frase));


