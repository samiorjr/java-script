/**
 * Validação de obrigatoriedade de votar
 * @author Samuel Junior
 */

//importação de pacote
const prompt = require('prompt-sync')()

//variaveis
let idade

//UX
console.clear()
console.log("validação da obrigatoridade de votar")

//entrada
idade = Number(prompt("digite a sua idade:"))

//processamento e saida
if (idade < 16) {
    console.log("Proibido votar")
} else if (idade === 16 || idade === 17 || idade > 70) {
    console.log("Voto facultativo")
}    else {
    console.log("obrigatorio votar")
    
}
