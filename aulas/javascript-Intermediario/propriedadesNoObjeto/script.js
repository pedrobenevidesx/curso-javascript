const usuario = {
    nome: "Pedro",
    mensagem: function () {
        //console.log(`Ola ${usuario.nome}`)
        
        console.log(`Ola ${this.nome}`)
    },
}

usuario.mensagem()