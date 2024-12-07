//saudacao
function saudacaopersonalizada(){
    console.log('ola mundo')
}

// =>chamando a funcao
saudacaopersonalizada()
saudacaopersonalizada()

//funcoes com parametros
function saudacao(nome) {
    console.log("Olá, " + nome + ", seja bem-vindo!");
  }

   prompt = require('prompt-sync')()
 nome = prompt('digite a fruta')
nomeamigo = prompt('nome do seu amigo')

saudacao(nome)
saudacao(nomeamigo)