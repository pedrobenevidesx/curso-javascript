/*function ContaBancaria(titular, saldo) {
    this.titular = titular
    this.saldo = saldo

    this.detalhes = function () {
        console.log(`Titular: ${this.titular} \n Saldo: ${this.saldo}`)
    }
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const pessoa1 = new ContaBancaria("Pedro", 100000)
console.log(pessoa1.titular)
console.log(pessoa1.saldo)
pessoa1.depositar(1000)
console.log(pessoa1.saldo)


function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade

    this.apresentar = function () {
        console.log(`Oi, meu nome e ${this.nome} e tenho ${this.idade} anos`)
    }
}

const humano1 = new Pessoa("Pedro", 21)
const humano2 = new Pessoa("Maria", 22)
humano1.apresentar()
humano2.apresentar()
*/

function Carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano

    this.descricao = function() {
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano}`)
    }
}

const carro1 = new Carro("Honda", "Civic", 2020)
const carro2 = new Carro("Toyota", "Corolla", 2023)
const carro3 = new Carro("Honda", "HR-V", 2025)

carro1.descricao()
carro2.descricao()
carro3.descricao()


