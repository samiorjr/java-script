/**
 * Estudo do laço for - Tabuada
 * @author Samuel Junior
 */

const prompt = require('prompt-sync')()

let tabuada 
let i = 1

console.clear()
console.log("tabuada")
tabuada = Number(prompt("Digite a tabuada desejada: "))

while (i < 11) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    i++
}