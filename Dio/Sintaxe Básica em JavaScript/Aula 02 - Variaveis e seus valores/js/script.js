// Tipagem:
// A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a //declaração de tipo de dado.
// A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.
// Ex.: Ao criarmos uma variável com valor entre aspas ("valor") o JavaScript já converte o dado para o tipo String.
// Ex.: var numero =1;
// o JavaScript já converte o valor 1 para o tipo Number.

// Tipos primitivos:
// As variáveis em JavaScript podem guardar tipos de dados que chamamos de tipos primitivos
// Variáveis podem guardar valores dos tipos: Boolean; null; undefined; Number; String; Array; Object; Function.
// Tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'JS Aula';
console.log(typeof(nome));

// Declaração de variáveis
// Existem 3 modos de declarar as variáveis
// var - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

var meuNome = 'Paulo';
meuNome = 'Silva';
console.log(meuNome);

// let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

let meuSegundoNome = 'Bruno';
meuSegundoNome = 'Paschoal';
console.log(meuSegundoNome);

// const - escopo local de loboc, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

const constante = 'É obrigatoria e nao pode ser alterada';
console.log(constante);

// Escopo

// O escopo em JavaScript define a limitação e visibilidade de um bloco de código.
// Escopo global - quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

// Escopo local - quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

//Exemplos de Escopo global e Escopo local:

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
	let escopoLocalInterno = 'local';
	console.log(escopoLocalInterno);
}

escopoLocal();

// Regras de Uso de Variáveis:

// Iniciar com letras, underscore _ ou cifrão $; Não pode iniciar com número.
// Exemplo: var 1nome ERRADO
// var nome || var _nome CERTO

// Não usar espaços (use o camelCase ou _);
// Exemplo: var nome completo ERRADO
// var nomeCompleto || var nome_completo CERTO

// Não usar palavras reservadas;
// Exemplo: var function

// Declarar variáveis no topo do bloco de código

// Atribuição:

// O sinal de igualdade "=" em javaScript, significa atribuição.
// Exemplo:
// como declarar: var nome = "meu nome";
// como ler: variável nome recebe o valor meunome;

var atribuicao = 'Paulo';
console.log(atribuicao);

// Comparação:
// Para fazermos uma comparação de valores em JavaScript usamos "==".
// Exemplo:
// como declarar: "0" == 0;
// como ler: "0" tem o valor igual a 0?
// nesse caso retorna true

var comparacao = '0' == 0;
console.log(comparacao);

// Comparação idêntica
// Para fazermos uma comparação de valores e tipos em JavaScript usamos "===".
// Exemplo:
// como declarar: "0" === 0;
// como ler: "0" tem o valor e o tipo idêntico a 0?
// nesse caso retorna false

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// Operadores aritméticos, relaciomais e lógicos

// Operadores aritméticos
// São tipos de operadores matemáticos com valor numérico:
// + adição;
var adicao = 1 + 1;
console.log("Adição: 1 + 1 = ", adicao);

// - subtração;
var subtracao = 2 - 1;
console.log("Subtração: 2 - 1 =", subtracao);

// * multiplicação;
var multiplicacao = 5 * 5;
console.log("Multiplicação: 5 * 5 = ", multiplicacao);

// / divisão real;
var divisaoReal = 30 / 5;
console.log("Divisão: 30 / 5 = ", divisaoReal);

// % divisão interna;
var divisaoInterna = 33 % 5;
console.log("Resto da divisão: 33 % 5 = ", divisaoInterna);

// ** potenciação;
var potenciacao = 10 ** 4;
console.log("Potenciação: 10 ** 4 = ", potenciacao);


// Operadores relacionais
// São tipos de operadores que consultam a relação entre valores:

// > maior que;
var maiorQue = 5 > 2;
console.log("5 > 2 = ", maiorQue);

// < menor que;
var menorQue = 5 < 2;
console.log("5 < 2 = ", menorQue);

// >= maior ou igual a;
var maiorIgual = 3 >= 3;
console.log("3 >= 3 = ", maiorIgual);

// <= menor ou igual a;
var menorIgual = 8 <= 4;
console.log("8 <= 4 = ", menorIgual);

// Operadores Lógicos
// São tipos de operadores que consultam valores lógicos:

// && - "e" - considera que todos os valores sejam true;
var valoresTrue1 = 5;
var valoresTrue2 = 5;

if (valoresTrue1 == valoresTrue2 && valoresTrue1 <= valoresTrue2) {
	console.log("Certo!");
} else {
	console.log("Errado!");
}

// Outro exemplo de &&
var e = true && true;
console.log("&& = ", e);

// || - "ou" - considera que qualquer valor seja true;
var ou = false || false;
console.log("|| = ", ou);

// ! - "não" - inverte o valor de true para false ou vice-versa;
var nao = !true;
console.log("! = ", nao);