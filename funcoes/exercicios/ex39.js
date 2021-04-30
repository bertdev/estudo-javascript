//trocar os elementos de 2 arrays de mesmo tamanho sem utilizar variavel auxiliar

const trocaArrays = (arrayA, arrayB) => {
  if(arrayA.length == arrayB.length) {
    for(let i = 0; i < arrayB.length; i++) {
      arrayA[i] = arrayA[i] + arrayB[i];
      arrayB[i] = arrayA[i] - arrayB[i];
      arrayA[i] = arrayA[i] - arrayB[i];
    } 
    console.log(arrayA, arrayB);
  } else {
    console.log("os arrays tem tamanhos diferentes");
  };
};

trocaArrays([1,2,3], [4,5,6]);