const cartaoCredito = "1234567812344928"
// console.log(cartaoCredito.length)

// Pega os 4 ultimos digitos.
const ultimosDigitos = cartaoCredito.slice(-4)
console.log(ultimosDigitos)

// O padStart preenche a string do inicio.
const numeroMascarado = ultimosDigitos.padStart(cartaoCredito.length, "X")

console.log(numeroMascarado)

// O padEnd preenche a string do final.
const number = "123"
console.log(number.padEnd(10, "#"))