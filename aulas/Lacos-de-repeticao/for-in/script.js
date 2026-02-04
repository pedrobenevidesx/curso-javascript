// for ... in executa iteracoes a partir de um objeto e percorre as propriedades.

 /*let pessoa = {
    nome: "Pedro",
    sobrenome: "Benevides",
    email: "pedro@email.com"
}


for (let propriedades in pessoa) {

    // Exibe o nome da propriedade.
    console.log(propriedades)

    // Exibe o conteudo da propriedade.
    console.log(pessoa[propriedades])
}

let estudantes = ["Pedro", "Joao", "Maria"]

for (let index in estudantes) {
    // console.log(index)

    console.log(estudantes[index])
}
    

let pessoa = {
    nome: "Pedro",
    idade: 21,
    cidade: "Juiz de Fora",
}

for (let propriedades in pessoa) {
    console.log(pessoa[propriedades])
}


let notas = {
    matematica: 8,
    portugues: 7,
    historia: 9,
    geografia: 10,
}

let total = 0
let media = 0 
let quantidade = 0

for (let materias in notas) {
    total += (notas[materias])

    quantidade++
}

console.log(total)

media = total / quantidade

console.log(media)


let usuario = {
    nome: "Pedro",
    idade: 21,
    cidade: "juiz de Fora",
}

let quantidade = 0

for (let propriedade in usuario) {
    console.log(usuario[propriedade])

    quantidade++
}

console.log(`A quantidade de propriedade é ${quantidade}`)

*/

const dados = {
  nome: "Ana",
  idade: 30,
  ativo: true,
  saldo: 250.75
}

for (let propriedade in dados) {
    if (typeof dados[propriedade] === "number") {
        console.log(dados[propriedade])   
    }
}
