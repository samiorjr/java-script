/**
 * Exemplo de uso estrutura switcj
 * @author Samuel Junior
 * 
 * 
 */
const prompt = require("prompt")


let opcao

console.clear()
console.log("Menu de opções:")
console.log("")
console.log("1. Cadastro de clientes")
console.log("2. Cadastro de produtos")
console.log("3. Relatório")
opcao = Number(prompt("Digite a opção desejada"))

//uso da estrura switch case para tratamento do valor digitado. Obs: esta estrutura aceita variaveis numericas do tipo números inteiros e caracteres unicos, dentro da estrutura o default é opcional

switch(opcao) {
    case 1:
        console.clear()
        console.log("tela de cadastro de clientes")
        break
          case 2:
        console.clear()
        console.log("tela de cadastro de produtos")
        break
          case 3:
        console.clear()
        console.log("Impressão de relatorios")
        break
    default:
        console.clear()
        console.log("Opção invalida")
        break
}