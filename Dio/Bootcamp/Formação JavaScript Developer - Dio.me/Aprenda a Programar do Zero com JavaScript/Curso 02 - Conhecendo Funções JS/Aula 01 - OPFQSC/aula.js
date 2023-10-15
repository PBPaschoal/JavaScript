function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Paulo');
sayMyName('Bruno');

function quadrado(valor) {
    return valor * valor;
}
// .
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

// .
function quadrado2(valor2) {
    return valor2 * valor2;
}

console.log(quadrado2(10) + quadrado2(10));

// .
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10)); // valor de 100 reais, incrementando 10%
console.log(incrementarJuros(100, 15)); // valor de 100 reais, incrementando 15%
console.log(incrementarJuros(300, 20)); // valor de 300 reais, incrementando 20%

/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação
sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela 
abaixo:

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave; 

*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc > 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc > 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc > 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

//(function main() {
(function () {
    const peso = 75;
    const alura = 1.75;

    const imc = calcularImc(peso, alura);
    console.log(classificarImc(imc));
})();

//main();