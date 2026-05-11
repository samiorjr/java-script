/**
 * @author Samuel Junior
 * 
 */

// Importação de pacote
const prompt = require('prompt-sync')()

// variaveis globais
let num1, num2, opcao, resultado

// Funçoes das operações (com parâmetros)
function somar(num1, num2) {
    return num1 + num2
}
function subtrair(num1, num2) {
    return num1 - num2
}
function Multiplicar(num1, num2) {
    return num1 * num2
}
function Dividir(num1, num2) {
    //Validação
    if (num2 === 0) {
        console.log("Erro! Impossivel dividir por 0")

    } else {
        return num1 / num2

    }
}
function raizQuadrada(num1) {
    return Math.sqrt(num1)
}
function porcentagem(num1, num2) {
    return (num1 * num2) / 100

}

//==============================================================
// Função principal (main)
function iniciarCalculadora() {
    //gerando um loop infinito (UX)
    do {
        mostrarMenu()
        //Escolha da opção
        opcao = Number(prompt("escolha um opção"))
        switch (opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return //encerra o loop infinito
            case 1:
                num1 = Number(prompt("Digite o primero numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = somar(num1, num2)
                break
            case 2:
                num1 = Number(prompt("Digite o primero numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = subtrair(num1, num2)
                break
            case 3:
                num1 = Number(prompt("Digite o primero numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = Multiplicar(num1, num2)
                break
            case 4:
                num1 = Number(prompt("Digite o primero numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = Dividir(num1, num2)
                break
            case 5:
                num1 = Number(prompt("Digite o valor: "))
                resultado = raizQuadrada(num1)
                break
            case 6:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = porcentagem(num1, num2)
                break
            default:
                console.log("opção invalida")
                prompt("Pressione [ENTER] para continuar")
                continue //continua dentro do swtch case
        }
        //Exibir o resultado
        console.log(`Resultado: ${resultado.toFixed(2)}`)
        prompt("Pressione [Enter] para continuar")

    } while (true)

}

// Função menu
function mostrarMenu() {
    console.clear()
    console.log("=== Calculadora JS ===")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Raiz quadrada")
    console.log("6. Porcentagem")
    console.log("0. Sair")
}

//Excecutar a função principal
iniciarCalculadora()


