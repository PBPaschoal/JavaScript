// Aula 06 - Aprofundando em Funções

// Tipos de função
// Declarativas
function funcao() {
	console.log('Função Declarativa')
}

funcao();

// Expressão de função
// com nomeação
var funcao = function funcao() {
	console.log('Expressão de função com nomeação');
}

funcao();

// sem nomeação
var funcao = function() {
	console.log('Expressão de função sem nomeação');
}

funcao();

// arrow function
var funcao = () => {
	console.log('Sou uma arrow function')
}

funcao();