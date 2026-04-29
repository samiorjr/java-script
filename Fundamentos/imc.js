/**
 * Calculo do ims
 * exemplo de encadeamento da estrutura if
 * @author Samuel Junior
 */
const prompt = require("prompt")

let peso, altura, imc

console.clear()
console.log("Cálculo do IMC ---------------")

peso = Number(prompt("Digite o seu peso em KG: "))
altura= Number(prompt("Digite a sua altura em metros"))

imc  = peso / (altura * altura)

console.log(`IMC: ${imc.tofixed(2)}`)

if (imc < 18.5) {
console.log("abaixo do peso")
} else if (imc < 25) {
console.log("peso normal")
} else if (imc < 30) {
console.log("Sobre peso")
} else if (imc < 35) {
console.log("Obesidade I") 
} else if (imc < 40) {
console.log("Obesidade II")
} else {
    console.log("Obesidade III")
}