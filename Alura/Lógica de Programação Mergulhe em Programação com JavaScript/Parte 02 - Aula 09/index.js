//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let dia = prompt("Que dia é hoje?");
if (dia == "sabado" || dia == "SABADO" || dia == "sábado" || dia == "Sábado" || dia == "domingo" || dia == "DOMINGO" || dia == "Domingo") {
    alert("Bom final de semana!");
} else {
    alert("Boa semana!");
}
let numero = prompt("Informe um número: ");
if (numero >= 0) {
    alert("Número positivo!");
} else {
    alert("Número negativo!");
} 
let pontos = prompt("Informe os seus pontos: ");
if (pontos >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}
let saldoConta = 500;
alert(`Seu saldo é de R$${saldoConta}.`);
let nome = prompt("Qual é o seu nome? ");
alert("Boas-vindas " + nome);