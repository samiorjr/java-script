/**
 * Estudo do laço for - Tabuada
 * @author Samuel Junior
 */

const prompt = require('prompt-sync')()

let tabuada

console.clear()
console.log("tabuada")
tabuada = Number(prompt("Digite a tabuada desejada: "))

for (let i = 1; i < 11; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}