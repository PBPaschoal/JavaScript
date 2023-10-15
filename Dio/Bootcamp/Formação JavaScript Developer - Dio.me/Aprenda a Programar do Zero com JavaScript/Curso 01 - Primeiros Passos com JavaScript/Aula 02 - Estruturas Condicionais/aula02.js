// Estruturas Condicionais
// Exemplo: Pessoa 1 usa a camisa azul e pessoa 2 usa a camisa vermelha
// OBS: Fiz um pouco diferente das aulas:

const camisetaP1Azul = true;
const camisetaP2Azul = false;

console.log(camisetaP1Azul);
console.log(camisetaP2Azul);

const number = 29;
const result = number % 2;

console.log('=============================');

if (result === 0) { // O operador === ele não faz comparação de uma variavel número comparado com string, sempre será false. Exemplo: numero % 2 === '0'; FALSE. 
    console.log('Number ' + number + ' is even!');
} else {
    console.log('Number ' + number + ' is odd!');
}

// ou

const numero = 3;
const numeroPar = (numero % 2) === 0;

console.log('=============================');
console.log('Number ' + numero + ' is ' + numeroPar);

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}

// ou

const imparOUpar = 5;

console.log('=============================');

if ((imparOUpar % 2) === 0) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}

// ====

const umNumero = 25;
const numberdivpor = (umNumero % 5) === 0;

console.log('=============================');

if (umNumero === 0) {
    console.log('O número é inválido!');
} else if (umNumero === 5) {
    console.log('O número é inválido!');
} else if (numberdivpor) {
    console.log('Sim!');
} else {
    console.log('Não!');
}

// Desafio da aula passada com incremento
const gasolinePrice = 5.21;
const ethanolPrice = 4.10;

let carFuel = `Ethanol`;
let averageSpending = 14;
let distanceTravel = 100;
let amountSpent;

const litersConsumed = distanceTravel / averageSpending;

if (carFuel === `Gasoline`) {
    amountSpent = litersConsumed * ethanolPrice;
} else {
    amountSpent = litersConsumed * gasolinePrice;
}

console.log('=============================');
console.log('$ ', amountSpent.toFixed(2));

