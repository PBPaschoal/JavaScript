// Aula 01 - Variáveis e Operadores
// Declarações de variaveis OBS: var hoje em dia praticamente não é mais utilizado.
var minhaVariavel = 10;
let outraVariavel = 10;

// É possível mudar os valores das variaveis var e let
minhaVariavel = 9;
outraVariavel = 20;


// const não é possível mudar o valor da variavel
const pi = 3.14;

console.log(minhaVariavel, outraVariavel, pi);

// Desafio.txt Primeiro Desafio

const fuelPrice = 5.46;
let kilometersPerLiter = 14;
let distanceKilometers = 300;

console.log('O valor gasto na viagem é R$ ', distanceKilometers / kilometersPerLiter * fuelPrice);
// .toFixed(2) para arredondar o valor