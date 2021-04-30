//uma função que receberá um código do item pedido e a quantidade, deve ser calculado
//o valor a ser pago, cada execução só calculará um item

const calculaPedido = (codigoItem, quantidade) => {
  let precos = [3, 4, 5.50, 7.50, 3.50, 2.80]
  switch (codigoItem) {
    case 100:
      console.log(`Preço pedido: R$${(quantidade * precos[0]).toFixed(2)}`);
      break;
    case 200:
      console.log(`Preço pedido: R$${(quantidade * precos[1]).toFixed(2)}`);
      break;
    case 300:
      console.log(`Preço pedido: R$${(quantidade * precos[2]).toFixed(2)}`);
      break;
    case 400:
      console.log(`Preço pedido: R$${(quantidade * precos[3]).toFixed(2)}`);
      break;
    case 500:
      console.log(`Preço pedido: R$${(quantidade * precos[4]).toFixed(2)}`);
      break;
    case 600:
      console.log(`Preço pedido: R$${(quantidade * precos[5]).toFixed(2)}`);
      break;
    default:
      console.log("Código invalido");
  }
};

calculaPedido(200, 4);
calculaPedido(400, 2);
calculaPedido(999, 20);
