/**
 * Estudo das funções
 * @author Samuel Junior
 */

//Função literal (simples)
function hello() {
    console.clear()
    console.log("Hello function")
    console.log("Tipo:" + typeof (hello)) //apoio ao entendimento da logica

}
//Para executar uma função basta "chamar" o nome da função, não esquecendo dos parênteses
hello()

//Função anônima >>>>>>>>>>>>>>>>>>>>>>>
const hello2 = function () {
    console.log("Hello function assigned")
    console.log("Tipo:" + typeof (hello2)) //apoio ao entendimento da logica
}

hello2()

// Função anônima simplificada >>>>>>>>>>>>>>>>>>>>>
const hello3 = () => {
    console.log("Hello Arrow function assigned")
    console.log("Tipo:" + typeof (hello3)) //apoio ao entendimento da logica
}
hello3()

// Função com parâmetros >>>>>>>>>>>>>>>>>>>>>
function somar(num1, num2) {
    console.log("Tipo:" + typeof (somar)) //apoio ao entendimento da logica
    return (console.log(num1 + num2))
}

//neste caso dentro de parênteses, fornecemos os números que serão somado na função
somar(2, 3)

// Função anônima com parâmetros >>>>>>>>>>>>>>>>>>>>>>>>
const somarA = function (num1, num2) {
    console.log("Tipo:" + typeof (somarA)) //apoio ao entendimento da logica
    return (console.log(num1 + num2))
}

somarA(6, 7)

// Função anônima simplificada com parâmetros >>>>>>>>>>>>>>>>>>>

const somarAF = (num1, num2) => {
    console.log("Tipo:" + typeof (somarAF)) //apoio ao entendimento da logica
    return (console.log(num1 + num2))
}
somarAF (8, 8)

//Função anônima super simplificada com parãmetros >>>>>>>>>>>>>>>>>>>>>>>>>>
// CUIDADI! Neste caso o retorno é implicito
const somarAFS = (num1, num2) => (console.log(num1 + num2))

somarAFS(2, 7)