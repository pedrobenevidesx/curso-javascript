// ------EVENTOS--------
/*window.addEventListener("load", () => {
    console.log("a pagina foi carregada")
})

addEventListener("click", (event) => {
    event.preventDefault()

    // Retorna todas as informacoes do evento.
    console.log(event)
    
    // Retorna o elemento clicado.
    console.log(event.target)

    // Retorna o textContent do elemento clicado.
    console.log(event.target.textContent)
})
*/

//-------EVENTOS EM UM ELEMENTO ESPECIFICO-------
/*
const main = document.querySelector("main")

main.addEventListener("scroll", (event) => {
    console.log(main.scrollTop)
})

main.addEventListener("scroll", () => {

    if(main.scrollTo > 300) {
        console.log("fim da lista")

        main.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
})
*/

/*
// -------EVEMTOS DE FORMULARIO --------

const forma = document.querySelector("form")

// com "onsubmit" ele vai sempre levar em consideracao o ultimo criado
forma.onsubmit = (event) => {
    event.preventDefault()
    console.log("voce fez submit no formulario #1")   
}

forma.onsubmit = (event) => {
    event.preventDefault()
    console.log("voce fez submit no formulario #2")   
}

// o "addEventListener" leva em consideracao todos
forma.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("voce fez submit no formnulario #3")
})

forma.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("voce fez submit no formnulario #4")
})
*/

// ------- Eventos em input -------

// keydown - captura todas as teclas precionadas
const input = document.querySelector("input")

//input.addEventListener("keydown", (event) => {
   // console.log(event.key)
//})

// keypress - quando uma tecla do tipo caractere e pressionada (letras, numeros, pontos, etc.)
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})
