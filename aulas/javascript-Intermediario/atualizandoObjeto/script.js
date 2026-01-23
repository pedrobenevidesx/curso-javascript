/*const produto = {
    nome: "Teclado",
    quantidade: 100,
}

// Atualizando o valor de uma propriedade.
console.log(produto.quantidade)
produto.quantidade = 90
console.log(produto.quantidade)

console.log(produto.nome)
produto.nome = "mouse"
console.log(produto.nome)

// Notacao de colchetes.
produto["quantidade"] = 50
console.log(produto)
*/


/*const pessoa = {
    nome: "Pedro",
    idade: 21,
    cidade: "juiz de fora" 
}

console.log(pessoa.nome)
pessoa.idade = 30
pessoa.profissao = "desenvolvedor"
*/

/*const carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2014,
    descricao: function() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}

carro.descricao()
*/

/*const contador = {
    valor: 0,
    incrementar: () => {
        this.valor++
    },
    decrementar: () => {
        this.valor--
    },
}

contador.incrementar()
contador.incrementar()

console.log(contador.valor)
*/

const aluno = {
    nome: "Pedro",
    nota1: 6,
    nota2: 3,
    resultado: function() {
        let media = (this.nota1 + this.nota2) / 2
        
        if (media >= 7) {
            return 'aprovado'
        } else {
            return 'reprovado'
        }
    }
}

console.log(aluno.resultado())