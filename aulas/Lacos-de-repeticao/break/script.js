/* Break encerra a execucao da repeticao ou switch para setguir para a instrucao seguinte.

let opcao = 3

switch(opcao) {
    case 1: 
        console.log("Cadastras")
        break
    case 2:
        console.log("Atualizar")
        break
    case 3:
        console.log("Remover")
        break
    default:
        console.log("Opcao invalida")
        break
}
*/

// Utilizando o break para finalizar a repeticao.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }

    console.log(i)
}