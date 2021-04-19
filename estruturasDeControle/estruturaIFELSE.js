const imprimirResultado = nota => {
  if(nota >= 7) {
    console.log(`Aprovado com nota ${nota}`);
  } else {
    console.log(`Reprovado com nota ${nota}`);
  };
};

//se a condição da estrura if for true, o bloco associado a if será executado
//caso o contrario(resultado false) o bloco associado ao else que será executado
//obs: se só tiver uma sentença de código associada também podemos omitir o bloco {}

imprimirResultado(7);
imprimirResultado(3);