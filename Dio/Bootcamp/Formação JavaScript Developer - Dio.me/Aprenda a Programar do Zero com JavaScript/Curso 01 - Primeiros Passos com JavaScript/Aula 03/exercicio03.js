/*  Aula 03 - Praticando Variáveis, Operadores e Estruturas Condicionais
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
    etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetura o 
    cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let productValue = 100;
let paymentCondition = `three`;
let discountAmount;
let newProductValue;

if (paymentCondition == `debit`) {
    discountAmount = productValue * (10 / 100);
    newProductValue = productValue - discountAmount;
    console.log('Product value with discount: $', newProductValue.toFixed(2));
} else if (paymentCondition == `money` || paymentCondition == `pix`) {
    discountAmount = productValue * (15 / 100);
    newProductValue = productValue - discountAmount;
    console.log('Product value with discount: $', newProductValue.toFixed(2));
} else if (paymentCondition == `twice`) {
    const valueOfTwoInstallments = productValue / 2;
    console.log('Two installments of $', valueOfTwoInstallments.toFixed(2));
} else {
    discountAmount = productValue * (10 / 100);
    newProductValue = productValue + discountAmount;
    console.log('In more times the total amount is $', newProductValue.toFixed(2));
}

// Ou

const precoEtiqueta = 100;
const formaDePagamento = 4;
console.log('================');

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}