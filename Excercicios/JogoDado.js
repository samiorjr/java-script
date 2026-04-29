/**
 * Jogo do dado
 * Exemplo de uso da estrutura do while
 * @author Samuel Junior
 */

const prompt = require('prompt-sync')()
let novojogo = "n"

do {
    console.clear()
    console.log("Jogo do dado")
    prompt("Pressione [enter] para lançar o dado...")
    console.log(`Face do dado: ${Math.ceil(Math.random() * 6)}`)
    novojogo = prompt("Deseja jogar novamente(s/n) ? ")

} while (novojogo === "s" || novojogo === "S")

console.clear()
console.log("Jogo do dado")
prompt("Pressione [enter] para lançar o dado...")
console.log(`Face do dado: ${Math.ceil(Math.random() * 6)}`)