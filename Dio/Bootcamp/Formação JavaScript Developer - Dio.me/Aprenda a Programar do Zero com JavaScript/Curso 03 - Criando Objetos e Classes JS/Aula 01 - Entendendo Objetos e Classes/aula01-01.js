// Objeto literal

/*
const pessoa = {
    nome: 'Paulo Bruno',
    idade: 31,
    teste: 'Removendo',

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

console.log(pessoa.nome);

console.log(pessoa.idade);

pessoa.altura = 1.74;

console.log(pessoa);

delete pessoa. teste;

console.log(pessoa);

pessoa.descrever();
*/
/*
const pessoa = {
    nome: 'Paulo Bruno Paschoal',
    idade: 31,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();
*/

// Sintaxe mais dinamica:
const pessoa = {
    nome: 'Paulo Bruno Paschoal',
    idade: 31,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);

/*
pessoa['nome'] = 'teste';
pessoa.nome = 'teste';
*/

// Classes

class umaPessoa {

    nomee;
    idadee;
    anoDeNascimento;

    // Podemos usar o constructor
    constructor(nomee, idadee) {
        this.nomee = nomee;
        this.idadee = idadee;
        this.anoDeNascimento = 2023 - idadee;
    }

    descreveer() {
        console.log(`Meu nome é ${this.nomee} e minha idade é ${this.idadee}.`);
    }
}
/*
const paulo = new umaPessoa();
paulo.nomee = 'Paulo B Paschoal';
paulo.idadee = 31;

const bruna = new umaPessoa();
bruna.nomee = 'Bruna Sene';
bruna.idadee = 26;

console.log(paulo);
console.log(bruna);

paulo.descreveer();
bruna.descreveer();*/

const bruno = new umaPessoa('Bruno', 31);
const bruna = new umaPessoa('Bruna', 26);

console.log(bruno);
console.log(bruna);
