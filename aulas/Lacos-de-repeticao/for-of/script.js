// for ... of itera sobre o valor de um objeto iteravel.

/* let estudantes = ["Pedro", "Amanda", "Maria"]

for (let estudante of estudantes) {
    console.log(estudante)
}


const numeros = [2, 4, 6, 8]

for (let numero of numeros) {
    console.log(numero)

    let dobro = numero * 2

    console.log(dobro)

}


const palavra = "javascript"

let contador = 0

for (let letra of palavra) {
    console.log(letra)

    contador++
}

console.log(`o numero de letras e ${contador}`)
*/

const notas = [5, 8, 3, 10, 7]

let contador = 0

for (let nota of notas) {
    if (nota >= 7) {
        console.log(nota)
        contador++
    }
}

console.log(`Total aprovadas: ${contador}`)