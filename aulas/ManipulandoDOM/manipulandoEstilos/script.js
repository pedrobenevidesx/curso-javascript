const input = document.querySelector("#name")

// Adiciona a classe
input.classList.add("input-error")

// Remove a class
input.classList.remove("input-error")

// Se nao tive a classe adiciona. Se tem, remove
input.classList.toggle("input-error")

const button = document.getElementById("btn")

// Modificar o estilo dos elementos CSS
button.style.backgroundColor = "red"


