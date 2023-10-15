// Aula 03: Vetores e Objetos

// Como declarar um array
let array = ['string', 1, true];
console.log(array);

// Pode guardar vários tipos de dados
let arrayOutro = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
console.log(arrayOutro[0]); //[5], manipulando array

// forEach
arrayOutro.forEach(function(item, index){console.log(item, index)});

// push
arrayOutro.push('Novo item');
console.log(arrayOutro);

// pop
arrayOutro.pop();
console.log(arrayOutro);

// shift
arrayOutro.shift();
console.log(arrayOutro);

// unshift
arrayOutro.unshift('Novo item no inicio');
console.log(arrayOutro);

// indexOf
console.log(arrayOutro.indexOf(true));

// splice
arrayOutro.splice(0, 3);
console.log(arrayOutro);

// slice
let novoArray = arrayOutro.slice(0, 3);
console.log(novoArray);

// Manipulando Objetos
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.boolean); // .boolean para retornar só o valor boolean

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); // destruturação

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno); // destruturação