import Countdown from "./countdown.js";


const tempoNiverArthur = new Countdown("13 August 2023 11:30 GMT-0300");

//Arthur é o nome do meu filho s2!
console.log(`Dias ${tempoNiverArthur.days}`);
console.log(`Horas ${tempoNiverArthur.hours}`);
console.log(`Minutos ${tempoNiverArthur.minutes}`);
console.log(`Segundos ${tempoNiverArthur.seconds}`);

//contagem regressiva em tempo real.
// setInterval(() => {
//     console.log(tempoNiverArthur.total)
// }, 1000)