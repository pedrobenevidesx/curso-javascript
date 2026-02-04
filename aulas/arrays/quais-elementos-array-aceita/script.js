let meuArray = [
    "um texto",
    10,
    true,
    function() {
        console.log("Funcao dentro do array")
    },
    {
        nome: "Pedro",
        email: "email@gmail.com"
    },
]
// Um texto.
console.log(meuArray[0])

// Numero.
console.log(meuArray[1])

// Booleano.
console.log(meuArray[2])

// Funcao
meuArray[3]()

// Objeto
console.log(meuArray[4].nome, meuArray[4].email)
