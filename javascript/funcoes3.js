//crie uma funcao que receba tres parametros: nome do produto, preco e o imposto, e retorne o preco com imposto calculado 

// crie um que pergunte as tres unformacoes, utilize a funcao criada e imprima os dados do produto e o preco final com imposto calculado 

function calculaprecos(produto, preco,imposto){
    return preco + preco * (imposto/100)
}

 const prompt = require('prompt-sync')()
let produto = prompt('digite o nome do produto')
let preco = parseFloat(prompt('digite o preço do produto'))
let imposto = parseFloat(prompt('digite o imposto'))

let precofinal = calculaprecos(produto, preco, imposto)
console.log('o preço final do produto ' + produto + 'ja com imposto é: ' + precofinal)