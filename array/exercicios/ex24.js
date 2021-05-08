// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir

const objetoInvertido = objeto => {
  const registros = Object.entries(objeto);
  const newObject = {};
  registros.forEach(registro => {
    newObject[registro[1]] = registro[0];
  });

  return newObject;
};

console.log(objetoInvertido({a: 1, b: 2}));
