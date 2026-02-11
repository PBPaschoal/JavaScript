//Criar uma função que exibe "Olá, mundo!" no console.
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// CONSOLE
function olaMundo() {
    console.log('Olá, mundo!');
}

function recebendoNome() {
    let nome = prompt('Informe seu nome');
    console.log(`Olá ${nome}!`);
}

function recebeNumero() {
    numero = 2;
    console.log(numero * 2);
}

function recebeTresRetornoMedia() {
    valor1 = 5;
    valor2 = 7;
    valor3 = 8;
    media = (valor1 + valor2 + valor3) / 3;
    console.log(media);
}

function recebeDoisRetornaMaior() {
    n1 = 22;
    n2 = 17;
    if (n1 > n2) {
        console.log(`${n1} é maior que ${n2}`);
    } else {
        console.log(`${n2} é maior que ${n1}`);
    }
}

function numeroMultnumero() {
    numero = 7;
    console.log(numero * numero);
}

// COMO DEVE SER FEITO
//01
function exibirOla() {
  console.log("Olá, mundo!");
}
exibirOla();
//02
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}
exibirOlaNome(`Alice`);
//03
function calcularDobro(numero) {
  return numero * 2;
}
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);
//04
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}
let media = calcularMedia(4, 7, 10);
console.log(media);
//05
function encontrarMaior(a, b) {
  return a > b ? a : b;
}
let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);
//06
function quadrado(numero) {
  return numero * numero;
}
let resultado = quadrado(2);
console.log(resultado); 