function ContaBancaria(titular, saldo) {
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
