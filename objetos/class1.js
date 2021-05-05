//em js class é um sugar sintax para fucntion pois uma class é convertida pra função
//possuindo todas as caracteristicas de prototype como herança 

class Lancamento {
  constructor(nome = "Generico", valor = 0) {
	  this.nome = nome;
		this.valor = valor;
	};
};

class CicloFinanceiro {
  constructor(mes, ano) {
		//estruturação do objeto gerado a partir dessa classe(atributos)
	  this.mes = mes;
		this.ano = ano;
	  this.lancamentos = [];
	};

  //adcionando metodos ao objeto
  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l)); 
	};

  sumario() {
    let valorConsolidado = 0;
		this.lancamentos.forEach(l => {
		  valorConsolidado += l.valor;
		});
		return valorConsolidado;
	};

};

const salario = new Lancamento("Salario", 4500);
const contaDeLuz = new Lancamento("ContaDeLuz", -200);

const contas = new CicloFinanceiro(6, 2020);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());

