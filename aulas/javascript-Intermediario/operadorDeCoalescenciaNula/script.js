let content = null
// exibe o lado direto, pois o content é null
console.log(content ?? "Conteudo padrao")



const usuario = {
    nome: "Pedro",
    avatar: undefined,
}

console.log(usuario.avatar ?? "default.png")