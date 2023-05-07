const rl = require('readline-sync')

console.log('---------Triplo----------')
console.log()

function triplo(n1){
    return parseInt(n1 * 3)
}

let numero = rl.question('Digite um valor e descubra o triplo dele: ')


console.log(`Você acaba de descobrir que o triplo de ${numero} é: ${triplo(numero)}!`)

console.log('--------- E N D ----------')
