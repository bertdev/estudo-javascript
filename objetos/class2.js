//entendendo herança de classes(por baixo dos panos a herença acontece por baixo com prototype)
//só a sintaxe dessa indicação que uma classe extende a outra que muda

class Avo {
  constructor(sobrenome) {
		this.sobrenome = sobrenome;
	};
};

class Pai extends Avo {
  constructor(sobrenome, profissao = "professor") {
    super(sobrenome);//passando sobrenome pra a função construtora da superclasse(classe prototype);
		this.profissao = profissao;
	};		
};

class Filho extends Pai {
  constructor() {
    super("Silva");
	};
};

const filho = new Filho;
console.log(filho);

