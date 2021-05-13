//o process é um objeto node que permite lermos informações do teclado do usuario
//e imprimir dados(na entrada padrão/teclado, e na saida parão/tela);

const anonimo = process.argv.indexOf("-a") !== -1;
//console.log(anonimo);

if(anonimo) {
  process.stdout.write("Olá anonimo\n");
  process.exit();
} else {
  process.stdout.write("informe seu nome: ");
  process.stdin.on("data", data => {
	//o evento data será disparado quando apertarmos enter dps de inserir o nome
    const nome = data.toString().replace("\n", "");
		process.stdout.write(`Olá ${nome}\n`);
		process.exit();
	});
};

