/**
 * Desafio Jokenpo
 * @author Samuel Junior
 */

//importação da pacote
const prompt = require('prompt-sync')()

// variaveis
let jogador, computador
let novojogo = "n"

// UX
do { 
    console.clear() 
console.clear()
console.clear()
console.log("     __     __ __         ___      ")
console.log(" __ / /__  / //_/__ ___  / _ \___")
console.log("/ // / _ \/ ,< / -_) _ \/ ___/ _ \\")
console.log("\___/\___/_/|_|\__/_//_/_/   \___/")
console.log("")

//logica do jogador
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. tesoura")
jogador = Number(prompt("Digite a opção desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("jogador escolheu pedra")
    case 2:
        console.log("jogador escolheu papel")
    case 3:
        console.log("jogador escolheu tesoura")
        break
    default:
        console.log("Opção invalida")
        break
}

// Logica do computador
computador = Math.ceil(Math.random() * 3) // 1 , 2 ou 3 

switch (computador) {
    case 1:
        console.log("Computador escolheu pedra")
    case 2:
        console.log("Computador escolheu papel")
    case 3:
        console.log("Computador escolheu tesoura")
        break
    default:
        console.log("Opção invalida")
        break
}

// Lógica para determinar o vencedor ou declarar empate
if (jogador === computador) {
    console.log("Empate")
} else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1) || (jogador === 3 && computador === 2)) {
    console.log("jogador venceu")
} else {
    console.log("Computador venceu")
}

    novojogo = prompt("Deseja jogar novamente(s/n) ? ")

} while (novojogo === "s")

