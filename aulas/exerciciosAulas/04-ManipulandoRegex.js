// Replace - é um método de string que serve para substituir partes do texto, usando texto comum ou Regex. Ele não altera a string original, retorna uma nova string.
/*const texto = "Tel: (11) 9a876-5432"

const regex = /\D+/g
const value = texto.replace(regex, "")

console.log(value)
*/

/*
//Match - Procura padroes no texto e retorna o que foi encontrado
const texto = "Tenho 2 gatos, 3 cachorros e 1 peixe"

const regex = /\d+/g

const value = texto.match(regex)

console.log(value)
*/

// ------------------------------------------------

//TEST - Responde se existe o padrao na string
const texto = "Tenho 2 gatos, 3 cachorros e 1 peixe"

const regex = /\d+/g

const value = regex.test(texto)

console.log(value)