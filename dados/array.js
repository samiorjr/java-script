/**
 * Estrutura de dados - Array(vetor)
 * @author Samuel Junior
 */

// a linha abaixo cria um array(vetor)
let alunos = ["Vitor", "Tania", "Pedro", "Maria", "Vivi", "Ana"]

console.clear()
console.log("=============== ARRAY ================")

console.log(alunos)
console.log(`Um array é do tipo: ${typeof (alunos)}`)

//obtendo o tamanho do array (length)
console.log(`Tamanho do array: ${alunos.length}`)

// Adicionando dados em um array (CRUD Create)
console.log("")
console.log("CRUD Create ===================")
// o método push() adiciona de forma segura um dado ao array
alunos.push("Jorge")
console.log(alunos)
console.log(`Tamanho do array: ${alunos.length}`)

// exibindo os dados de um array (CRUD Read)
console.log("")
console.log("CRUD Read ===================")
console.log(alunos)
console.table(alunos)
// exibindo um dado específico do array
console.log(`Aluno[2]: ${alunos[2]}`)

// alteranddo dados de um array (CRUD Update)
// Usar o índice para alterar um dado do vetor
console.log("")
console.log("CRUD Update ===================")
alunos[0] = "Victor"
alunos[4] = "Viviane"
console.table(alunos)

// excluindo dados de um array (CRUD Delete)
console.log("")
console.log("CRUD Delete ===================")
// delete exclui de forma segura um dado do array
delete alunos[1]
console.table(alunos)
console.log(`Tamanho do array: ${alunos.length}`)

console.log("")
console.log("-----------------------------------")
console.log("Percorrendo um array ==============")
console.log("")

//          [0][1][2][3][4][5]  
let notas = [3, 8, 5, 9, 2, 7]
console.log("")
console.log(notas)
console.table(notas)

// Percorrendo um array com uso do laço for
console.log("Laço for")
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// Simplificação do laço for (forEach)
console.log("Laço forEach")
notas.forEach((notas) => {
    console.log(notas)
})
// Manipulação e filtragem de dados de um array
console.log("")
console.log("-----------------------------------")
console.log("Manipulação e filtragem de dados ==")
console.log("")
console.log("Exemplo 1: Adicionar 1 ponto as notas dos alunos")
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(`Notas originais: ${notas}`)
console.log(`Notas atualizadas: ${notasAtualizadas}`)

console.log("")
console.log("Exemplo 2: Conversão de um sistema de notas(números) para letras(caracteres)")
/*
  NA - Não atendeu (nota < 5)
  PA - Parcialmente atendido (nota entre 5 e 7)
   A - Atendeu (nota > 7)
*/
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})
console.log(`Notas originais: ${notas}`)
console.log(`Notas convertidas: ${notasConvertidas}`)

// Nova estrutura de dados
let alunosDC = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clarck",
        idade: 45,
        bolsista: false

    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false

    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true

    }
]
console.log("")
console.log("Estrutua de dados usando array")
console.log("")
console.log(alunosDC)
console.table(alunosDC)

// filtros
console.log("")
console.log("Filtros: Exemplos 1: Alunos bolsistas")
console.log(alunosDC.filter((b) => {
    return b.bolsista === true
}))

console.log("")
console.log("Filtros: Exemplos 2: Alunos com idade superior a 40 anos")
console.log(alunosDC.filter((i) => {
    return i.idade >= 40 
}))

console.log("")
console.log("Filtros: Exemplos 3: Ordenar os alunos")
//Dica: Criar uma copia do array original para não modificar o index ([...array] criar uma cópia) "RELATORIO"
let alunosOrdenados = [...alunosDC] //criar uma copia
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)
