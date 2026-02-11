let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma() {
    let valor1 = Number(prompt('Informe um valor'));
    let valor2 = Number(prompt('Informe o segundo valor'));
    let soma = valor1 + valor2;
    alert(soma);
}