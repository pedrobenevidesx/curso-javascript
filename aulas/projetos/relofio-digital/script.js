// Funcao para atualizaro o tempo na tela.
function atualizarTemporizador() {

// Pega o elemento da tela
var display = document.querySelector(".display");

var agora = new Date();

// Retorna o horario.
var horario = corrigirHorario(agora.getHours()) + ":" + corrigirHorario(agora.getMinutes()) + ":" + corrigirHorario(agora.getSeconds());

// Atualiza o elemento na tela com o horario atual.
display.textContent = horario;
}

function corrigirHorario (numero) {
    if (numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}

atualizarTemporizador();

// setInterval para executar uma funcao repetidamente.
setInterval(atualizarTemporizador, 1000);




