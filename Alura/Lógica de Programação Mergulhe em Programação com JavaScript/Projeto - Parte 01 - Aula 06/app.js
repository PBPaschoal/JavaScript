alert("Boas vindas ao jogo do númnero secreto");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 10");
if(chute == numeroSecreto) {
    console.log("Isso ai! Você descobriu o número secreto (5)");
}

let nomeUsuario = prompt("Digite seu nome");

let idadeUsuario = prompt("Digite sua idade");

let temPao = prompt("Você tem pão em casa? Responda com sim ou não");

if (temPao === "sim") {
    alert("Fazer sanduíche");
} else {
    alert("Fazer miojo");
}
