// Capture um número entre 1 e 10
// E mostre o quadrado do número
// regra: o numero precisa estar entre 1 e 10

// variaveis

let numberInput = prompt("Digite um número entre 1 e 10");

// tipo de dado: Boolean = true ou false
//if(numberInput <= 10 && numberInput >= 1){
//  alert(`O número ${numberInput} ao quadrado é ${numberInput * numberInput}`)
//} else {
//  alert("Número inválido. Atualize a página para tentar novamente.")
//} OU

if(numberInput <= 10 && numberInput >= 1){
  document.write(`O número ${numberInput} ao quadrado é ${numberInput * numberInput}`)
} else {
  document.write("Número inválido. Atualize a página para tentar novamente.")
}