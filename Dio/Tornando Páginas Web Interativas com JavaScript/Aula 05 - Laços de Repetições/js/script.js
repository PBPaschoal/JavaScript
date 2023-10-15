// Aula 05 - Laços de Repetições
// for
for(let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`); // Tabuada de 5
}

console.log("\nSó os resultados de numeros par");
for(let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} x 5 = ${i * 5}`);
    }
}

// while
console.log("\nWhile");
let x = 1;
while(x <= 10){
    console.log(`${x} x 5 = ${x * 5}`);
    x++;
}

// array
console.log("\nArray");
const valores = [1,2,3,4,5,6,7,8,9,10];
valores.forEach((value)=> {
    console.log(`${value} x 5 = ${value * 5}`);
});

// map
console.log("\nMap");
const valores2 = [1,2,3,4,5,6,7,8,9,10];
const resultado = valores.map((value) => {
    return value * 5
});

console.log(resultado);