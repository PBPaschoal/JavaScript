function escrevaMeuNome() {
    const nome = 'Paulo';
    console.log('Meu nome é ' + nome);
}

escrevaMeuNome();

// Ou

function escrevaMeuNome2(nome2) {
    console.log('Meu nome é ' + nome2);
}

escrevaMeuNome2('Paulo');
escrevaMeuNome2('Bruno');

// Maior de idade

const idade = 31;

function SouMaiorDeIdade(idade) {
    
    if (idade >= 18) {
        console.log('Eu tenho ' + idade + ' anos e sou maior de idade!');
    } else {
        console.log('Eu tenho ' + idade + ' anos e não sou maior de idade.');
    }
}

SouMaiorDeIdade(idade);

// OU

function SouMaiorDeIdade2(idade2) {
    
    if (idade2 >= 18) {
        console.log('Eu tenho ' + idade2 + ' anos e sou maior de idade!');
    } else {
        console.log('Eu tenho ' + idade2 + ' anos e não sou maior de idade.');
    }
}

SouMaiorDeIdade2(31);

// Juntando:

function escrevaMeuNome3(nome3) {
    return 'Meu nome é ' + nome3;
}

function SouMaiorDeIdade3(idade3) {
    if (idade3 >= 18) {
        console.log(escrevaMeuNome3('Paulo') + ' e sou Maior de idade.');
    } else {
        console.log('sou Menor');
    }
}

SouMaiorDeIdade3(31);

/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
    etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetura o 
    cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;
console.log('================');

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}