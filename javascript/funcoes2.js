//funcoes com dois paramentros
function calculamedia(n1,n2){
    return (n1 + n2) / 2
}

prompt = require('prompt-sync')()
nota1 = parseFloat(prompt('digite a primeira nota'))
nota2 = parseFloat(prompt('digite a segunda nota'))

media = calculamedia(nota1,nota2)
console.log('a media do aluno foi: ' + media)