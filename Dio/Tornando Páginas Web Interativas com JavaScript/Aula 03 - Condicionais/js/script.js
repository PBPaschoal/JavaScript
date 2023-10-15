// Exemplo 01
const idade = 25;

if (idade > 18) {
    console.log('Maior que 18');
} else {
    console.log('Menor que 18');
}

// Exemplo 02
const nota = 7;

if (nota < 5) {
    console.log("Abaixo da média");
} else if (nota > 5 && nota <= 7) {
    console.log("Na média");
} else {
    console.log("Acima da média");
}

// Exemplo 03

const nota2 = 9;

switch (nota) {
    case nota < 5:
        console.log("Abaixo da média");
        break;
    case nota2 > 5:
        console.log("Na média");
        break;
    default:
        console.log("Acima da média");
}

nota2 > 5 ? console.log("Aprovado") : console.log("Reprovado");