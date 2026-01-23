const usuario = {
    id: 1,
    nome: "Pedro",
    /*endereco: {
        rua: "Rio Branco",
        cidade: "Juiz de Fora",
        geo: {
            latitude: 46.808,
            longitude: 17.5674,
        },
    }, */
    mensagem: function() {
        console.log(`Ola, ${this.nome}`)
    },
}

console.log(usuario?.endereco?.rua)