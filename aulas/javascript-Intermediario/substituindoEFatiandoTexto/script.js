let mensagem = "Estou estuando os fundamentos do Javascript"

// Substituindo parte de um texto.
console.log(mensagem.replace("Javascript", "HTML"))

console.log(mensagem)

// Extraindo uma parte da string (start, end)
console.log(mensagem.slice(6, 30)) 

// Extraindo uma parte da string de tras para frente.
console.log(mensagem.slice(-11))

let textoComEspaco = "    Texto de exemplo    "
console.log(textoComEspaco.length)

// Remove espacos em branco no inicio e no final da string
console.log(textoComEspaco.trim().length)