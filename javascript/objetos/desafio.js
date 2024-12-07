//livro
const livro '' = {
    titulo: 'o senhor dos aneis',
    autor: 'j.r.r. tolkien',
    ano: 1954
};
console.log(livro.titulo)
console.log(livro.autor)
console.log(livro.ano)

const livro = {
    titulo: 'o senhor dos aneis',
    autor: 'j.r.r. tolkien',
    ano: 1954

dadoslivro : function() {
    console.log(this.titulo)
    console.log(this.autor)
    console.log(this.ano)
    }}




//carro
const carro = {
marca: 'honda',
modelo: 'civic',
ano: 2020
}
 const corrigido = {
    cor: 'prata'
 }

 Object.assign(carro, corrigido)
 carro.ano = 2022;
 console.log(carro)

 //pessoa
 const pessoa = {
    nome: 'carlos',
    idade: 28,
    cumprimento: function(){
        return 'ola, meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos'
    }
 }
 console.log(pessoa.cumprimento())