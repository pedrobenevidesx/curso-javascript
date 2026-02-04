// WHILE: executa ate que a condicao seja verdadeira.

let execucao = true

while (execucao) {
    let response = window.prompt("Deseja continuar? 1 (SIM) ou 2 (NAO)")

    if (response === "2") {
        execute = false
    }
}

console.log("Segue o fluxo...")