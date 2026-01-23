const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    const value = input.value
    const regexNumber = /\d+/g

    if (regexNumber.test(value)){
        alert("O texto contem numero. Por favor, digite corretamente")
    }
    else {
        alert("cadastro realizado")
    }
} 