/* Continue encerra (pula) a execucao das instrucoes na iteracao atual e continua a execucao do loop com a proxima iteracao

for (let i = 0; i < 10; i++) {
    
    if (i === 5) {
        continue 
    }
    
    
    console.log(i)

}

-------------------

for (let i = 0; i < 21; i++) {
    if(i % 2 === 0){
        continue
    } 
    else {
        console.log(i)
    }
}

-------------
    */

const nomes = ["Ana", "", "Carlos", null, "João", undefined, "Maria"]

for (let nome of nomes) {
    if (typeof nome !== "string" || nome == "") {
        continue
    }
    else {
        console.log(nome)
    }
}
