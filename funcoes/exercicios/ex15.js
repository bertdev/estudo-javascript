const verificaDisponibilidadeModelo = modeloVeiculo => {
  switch (modeloVeiculo) {
    case "hatch":
      console.log("Compra realizada com sucesso");
      break;
    case "sedan":
    case "motocicleta":
    case "caminhonete":
      console.log("Tem certeza que não prefere esse modelo?");
      break;
    default:
      console.log("Não trabalhamos com esse modelo");
  };
};

verificaDisponibilidadeModelo("hatch");
verificaDisponibilidadeModelo("sedan");
verificaDisponibilidadeModelo("SUV");
