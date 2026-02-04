let frutas = ["Maca", "Melancia", "limao",  "Morango"]
// console.log(frutas)

let posicao = frutas.indexOf("Melancia") 
console.log(posicao)

// Remove um item pela posicao do indice(1 e o numero de itens para remover)
// frutas.splice(1, 3)

frutas.splice(posicao, 1)
console.log(frutas)


// ------------------------------------


let carros = ["civic", "mustang", "corsa", "creta"]

let position = carros.indexOf("creta")

console.log(position)

carros.splice(2, 3)
console.log(carros)