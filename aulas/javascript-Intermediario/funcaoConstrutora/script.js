function criarProduto(nome) {
    const produto = {}

    produto.nome = nome

    produto.detalhes = function () {
        console.log(`O nome do produto é ${this.nome}`)
    }

    return produto
}

// O new cria um novo objeto na memoria utilizando a estrutura da funcao construtora.
const produto1 = new criarProduto("Teclado")
console.log(produto1.nome)
produto1.detalhes()

const produto2 = new criarProduto("Mouse")
console.log(produto2.nome) 
produto2.detalhes()


function Pessoa(nome) {
    this.nome = nome
    this.mensagem = function () {
        console.log(`Ola, ${this.nome}`)
    }
}

const pessoa1 = new pessoa("Pedro")
console.log(pessoa1.nome)
pessoa1.mensagem()