//obs: sempre colocar no .gitignore o node_modules pois essa pasta pode ser 
//facilmente refeita com o comando npm install

//importando modulos de terceiros 
const _ = require("lodash");//por padrão lodash usamos com _ como nome da constante 

setInterval(() => console.log(_.random(1, 100)), 2000);

