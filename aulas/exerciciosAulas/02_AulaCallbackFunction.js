function execute(taskName, callback) { // passa funcao como parametro
    console.log("Executando a tarefa: ", taskName)

    callback() // chama a funcao
}

// cria a funcao
function callback() {
    console.log("Tarefa finalizada")
}

execute("download do arquivo...", callback)



function executar(callback) {
    console.log("Executando...");
    callback();
}

executar(function () {
    console.log("Callback executado!");
});
