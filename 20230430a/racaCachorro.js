let racasDeCachorro = ['Viralata', 'Pitbull', 'Pastor Alemão', 'Buldog', 'Pincher']

let raca1 = racasDeCachorro[0]
let raca2 = racasDeCachorro[1]
let raca3 = racasDeCachorro[2]
let raca4 = racasDeCachorro[3]
let raca5 = racasDeCachorro[4]

racasDeCachorro = parseInt(prompt('Insira um número de 0 até 4 e descubra qual a raça de cachorro que combina com você!'))

if (racasDeCachorro == 0) {
    alert(`Parabéns, você combina com ${raca1}, pois você se adapta muito a todos ambientes!`)    
}else if(racasDeCachorro == 1) {
    alert(`Parabéns, você combina com ${raca2}, pois você é forte e agressivo nas suas decisões!`)    
}else if(racasDeCachorro == 2) {
    alert(`Parabéns, você combina com ${raca3}, pois você é disciplinado e mantém o foco na sua decisão!`)    
}else if(racasDeCachorro == 3) {
    alert(`Parabéns, você combina com ${raca4}, pois você tranquilo e de bem com a vida!`)    
}else if(racasDeCachorro == 4) {
    alert(`Parabéns, você combina com ${raca5}, pois você é basicamente tremedeira e nervos a flor da pele!!!!`)    
}else{
    alert('Digite somente números entre 0 e 4 por favor!')
}
