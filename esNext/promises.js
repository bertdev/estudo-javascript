//utilizamos promise quando queremos algum tipo de processamento assincrono
//no geral essa promise pode ser resolvida ou rejeitada 

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
	  //a resolve é uma função que será executada se a promise for resolvida
		//reject será se a promise for rejeitada 
		setTimeout(() => resolve(frase), segundos * 1000);
	});
};

//recebendo o resultado da promise
falarDepoisDe(5, "Amigo estou aqui")
		.then(frase => frase.concat("!!!"))
		.then(outraFrase => console.log(outraFrase))
		.catch(e => console.log(e));
//o resultado da promise é passado para a função then, que pode ser encadeado com outras then
//o resultado de uma promise só passará um parametro 
//para tratar erro usaremos a função catch
//
