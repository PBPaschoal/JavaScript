//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(altura, peso) {
    return peso / (altura * altura).toFixed(2);
}
let imc = calculoIMC(1.74, 82.3);
console.log('01) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.');
console.log(`Resultado: ${imc}`);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function valorFatorial(valor) {
    let acumulador = 1;
    while (valor >= 1) {
            acumulador = acumulador * valor;
            valor--;
        }
    return acumulador;
}
let resultado = valorFatorial(9);
console.log('02) Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.');
console.log(`Resultado: ${resultado}`);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function valorDolar(dolar) {
    return dolar * 120.15.toFixed(2);
}
let valorReais = valorDolar(4.80);
console.log('03) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.');
console.log(`Resultado: R$ ${valorReais}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetroRet(altura, largura) {
    let perimetro = 2 * (altura + largura);
    let area = altura * largura;
    return {
        perimetro: perimetro,
        area: area

    };
}
let resultado2 = areaPerimetroRet(3, 5);
console.log('04) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.');
console.log(`Resultados: Perimetro = ${resultado2.perimetro} e Area = ${resultado2.area}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetroSalaC(raio) {
    pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;
    return {
        area: area,
        perimetro: perimetro
    }
}
let resultado3 = areaPerimetroSalaC(4);
console.log('05) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.');
console.log(`Resultados: Area = ${resultado3.area} e Perimetro = ${resultado3.perimetro}`);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
console.log('06 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.');
function taboada(numero2) {
    let contador = 1;
    let resultado4 = 0;
    while (contador <= 10) {
        resultado4 = numero2 * contador;
        console.log(`${numero2} * ${contador} = ${resultado4}`);
        contador++;
    }
    return resultado4;
}
resultado4 = taboada(4);