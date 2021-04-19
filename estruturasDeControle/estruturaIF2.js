function teste1(num) {
  if(num > 7) 
    console.log(num); //somente essa sentença está associada ao if
  console.log("final");
};

//quando if possui apenas uma sentença de código, podemos omitir o bloco {}

teste1(9);
teste1(2);

function teste2(num) {
  if(num > 7); {//este bloco de código não está associado ao if, por conta do ponto e virgula
                //que indica o fim de uma sentença de código vazia associada ao if  
    console.log(num);
  };
};

teste2(9);
teste2(2);