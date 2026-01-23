// set Timeout - Executa apenas um vez 

console.log("Antes do setTimeout")

setTimeout(function() {

    console.log("testando o setTimeout")

}, 2000)

console.log("Depois do setTImeout")

// setInterval - Executa varias vezes (de acordo com o intervalo colocado)

setInterval(function () {

    console.log(new Date().toLocaleTimeString())

}, 1000) 
