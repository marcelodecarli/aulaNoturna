const rl = require("readline-sync")

const pessoa = { //exercício 1 letra A
    nome: 'Marcelo',
    apelidos: ["celo", " gordinho", " marcelão"]
}

console.log(`Eu sou o ${pessoa.nome}, 
            mas também pode me chamar de ${pessoa.apelidos}!!!`)

const novaPessoa = { //Exercício 1 letra B
    ...pessoa.nome,
    apelidos: ["doidão"," celão"," grandão"]
}

console.log(`Eu sou o ${pessoa.nome}, 
            mas também pode me chamar de ${novaPessoa.apelidos}!!!`)

let apelidoLegal = rl.question("Qual você mais gostou???")

console.log(`O apelido que você mais gostou foi ${apelidoLegal}.`)