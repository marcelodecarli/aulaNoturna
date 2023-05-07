let nome
let sobrenome
let idade
let estuda

nome = prompt('Qual o seu primeiro nome?').trim().toUpperCase()
sobrenome = prompt('Qual o seu sobrenome?').trim().toUpperCase()
idade = parseInt(prompt('Qual a sua idade?'))
estuda = prompt('Você é estudante? Diga somente sim ou não').toLowerCase()

alert(`Seu nome completo é ${nome} ${sobrenome}.`)
alert(`Seu primeito nome é ${nome}.`)
alert(`Sua idade é ${idade} anos.`)

if (estuda === 'sim') {
    alert(`Parabéns continue assim!!`)
}else if(estuda === 'não'){
    alert('Procure estudar, faz bem para você mesmo!')
}else{
    alert('Resposta errada, comece o cadastro novamente!!!!'.toUpperCase())
}
