/* Introdução ao JavaScript:
 * JavaScript é uma linguagem de programação de alto nível, interpretada e amplamente utilizada para criar páginas da web interativas. 
 * Ela é executada no navegador do usuário e permite adicionar funcionalidades dinâmicas às páginas web, como interações do usuário, animações
 * e manipulação do conteúdo da página. */

/* Variáveis:
 * As variáveis em JavaScript são usadas para armazenar dados. Você pode declarar uma variável usando as palavras-chave var, let ou const, 
 * seguida pelo nome da variável e, opcionalmente, um valor inicial.
 * Exemplo: */

var idade = 32;
let nome = "Bruno";
const ALTURA = 1.74;

/* Saída de Dados:
 * Você pode exibir dados na tela usando a função console.log() ou manipulando o conteúdo do documento HTML.
 * Exemplo:
 * console.log("Olá, mundo!");
 * document.getElementById("meuElemento").innerHTML = "Olá, mundo!"; */

console.log("Olá " + nome);
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}
if (ALTURA >= 1.70) {
    console.log("E você também é alto!");
} else {
    console.log("E você não é alto.");
}

/* Entrada de Dados:
 * Para receber dados do usuário, você pode usar métodos como prompt() para caixas de diálogo ou capturar eventos de entrada em elementos HTML.
Exemplo: */

let pais = prompt("Qual é o seu país? ");
// Exibir no HTML:
document.getElementById("meuPais").textContent = "Resposta: " + pais;

/* Estrutura Sequencial:
 * A estrutura sequencial em JavaScript segue a ordem das instruções. Cada instrução é executada em sequência, uma após a outra.
 * Exemplo:
 * let a = 5;
 * let b = 3;
 * let soma = a + b;
 * console.log("A soma de a e b é: " + soma); */

let ano = prompt("Informe o seu ano de nascimento: ");
let idadeConfirmada = 2024 - ano;
if (idadeConfirmada == idade) {
    console.log("A sua idade realmente é " + idade);
} else {
    console.log("Se os meses estiverem certos, a sua idade real não é " + idade);
}
// Exibir no HTML:
document.getElementById("anoNascimento").textContent = "Resposta: " + ano;


/* Expressões Aritméticas:
 * Você pode realizar operações matemáticas em JavaScript usando operadores aritméticos, como +, -, *, / e % (módulo).
 * Exemplo:
 * let resultado = (5 + 3) * 2;
 * console.log("O resultado é: " + resultado); */

let valorHora = prompt("Informe o seu salario por hora: R$");
let salarioDia = valorHora * 9;
let salarioMes = salarioDia * 20;
console.log("Seu salario no mês é R$" + salarioMes.toFixed(2));

// Exibir no HTML:
document.getElementById("salario").textContent = "Resposta: R$" + salarioMes;

/* Operadores:
 * JavaScript suporta diversos tipos de operadores, incluindo operadores aritméticos, de atribuição, de comparação, lógicos, entre outros.
 * Exemplo: */

let x = 10;
let y = 5;
let z = x > y; // true
console.log("O valor de z é: " + z);

/* Precedência:
* Os operadores em JavaScript têm precedência, determinando a ordem em que as operações são realizadas em expressões complexas.
* Exemplo: */

let resultado = 10 + 5 * 2; // O resultado é 20, devido à precedência dos operadores
console.log("O resultado é: " + resultado);

/* Funções:
 * As funções em JavaScript são blocos de código reutilizáveis que podem ser chamados para executar uma tarefa específica. Elas podem
 * aceitar parâmetros e retornar valores.
 * Exemplo: */

function soma(aA, bB) {
    return aA + bB;
}

let resultado2 = soma(10, 92);
console.log("O resultado da soma é: " + resultado2);

do {
    console.log("[1) Segunda-feira] - [2) Terça-feira] - [3) Quarta-feira] - [4) Quinta-feira] - [5) Sexta-feira] - [6) Sábado] - [7) Domingo]");
    var dia = parseInt(prompt("Que dia é hoje? ")); // Converte a entrada para um número inteiro
    switch (dia) {
        case 1:
            console.log("Segunda-feira");
            break;
        case 2:
            console.log("Terça-feira");
            break;
        case 3:
            console.log("Quarta-feira");
            break;
        case 4:
            console.log("Quinta-feira");
            break;
        case 5:
            console.log("Sexta-feira");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Opção inválida");
    }
} while (dia < 1 || dia > 7); // O loop continua enquanto o dia fornecido for menor que 1 ou maior que 7
// Exibir no HTML:
document.getElementById("diaDaSemana").textContent = "Resposta: " + dia;