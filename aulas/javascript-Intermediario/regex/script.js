const input = document.querySelector("input")
const form = document.querySelector("form")

/*input.addEventListener("input", () => {
    const value = input.value
    const regex = /\D+/g

    RETORNA O PADRA ENCONTRADO NA STRING.
    console.log(value.match(regex))

    //Testa se atende ao padrao
    const isValid = regex.test(value)
    console.log(isValid)


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const regex = /\D+/g
    const value = input.value

    if (regex.test(value)) {
        console.log(value)
    } else {
        alert("valor invalido. digite corretamente")
    }
    console.log(value)
})
    */

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const regex = /\D+/g
    const value = input.match(regex)

    console.log(value)

})