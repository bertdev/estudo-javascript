//para agendar tarefas com o node usaremos a dependencia node-schedule
//
const schedule = require("node-schedule");

//no parametro está sendo passado que irá executar de 5 em 5 seg
//ignorando os min, as 19hrs, ignorando o dia, o mes, em uma quinta
const tarefa1 = schedule.scheduleJob("*/5 * 19 * * 4", () => {
  console.log("Executando tarefa 1!", new Date().getSeconds());
});

setTimeout(() => {
  tarefa1.cancel();
  console.log("cancelando tarefa1");
}, 20000);

//criando uma regra recorrente 
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];//de segunda a sexta 
regra.hour = 19;
regra.second = 30;//executará sempre no segungo 30

const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log("Executando tarefa 2!", new Date().getSeconds());
});

setTimeout(() => {
  tarefa2.cancel();
  console.log("cancelando tarefa2");
}, 20000);


