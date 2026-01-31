let mensagem = "Estou estudano os fundamentos do javascript"

// Comprimento de uma string.
console.log(mensagem.length)

let senha = "12345"

if (senha.length < 6) {
    console.log("A senha deve ter ao menos 6 caracteres")
}

// Quantos digitos tem um numero.
let valor = 12345
console.log(String(valor).length)
console.log(valor.toString().length)