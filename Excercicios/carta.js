/**
 * Sorteio de uma carta
 * Exemplo de uso de array pai simplificar o código
 * @author Samuel Junior
 */

const prompt = require('prompt-sync')()
//           [0]  [1]  [2]  [3]
let nipes = ["♠", "♥", "♦", "♣"]
//           [1]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]   [9]  [10] [11] [12]
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",]

let novojogo = "n"

do {
    console.clear()
    console.log("Sorteio de uma carta - ♠, ♥, ♦, ♣")
    prompt("Pressione a tecla [Enter] para sortear uma carta")
    let nipe = nipes[Math.floor(Math.random() * 4)] // 0 1 2 3 
    let face = faces[Math.floor(Math.random() * 13)] // 0 1 ... 12 

    console.log(`${face}${nipe}`)

} while (novojogo === "s" || novojogo === "S") 