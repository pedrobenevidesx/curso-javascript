// cria um objeto vazio.
const obj = {}
console.log(obj)
console.log(typeof obj)

const usuario = {
    email: "pedro@email.com",
    idade: 18,
    nome: {
        primeiro_nome: "Pedro",
        sobrenome: "Benevides",
    },
    endereco: {
        rua: "Rua x",
        numero: 23,
        cidade: "Juiz de fora",
        cep: "12345-123",
    },
    message: () => {
        console.log("Oi, Pedro")
    }
}

// Acessando propriedades e metodos usando a notacao de ponto.
console.log(usuario.email)

// Acessando propriedade de objetos.
console.log(usuario.nome.primeiro_nome)

// Executa o metodo do objeto.
usuario.message()

// Notacao de colchetes
console.log(usuario["email"])
console.log(usuario["nome"]["primeiro_nome"])
usuario["message"]()