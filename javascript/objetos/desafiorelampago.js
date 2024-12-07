const pessoas = [
    {
        nome: 'ana',
        idade: 25,
        profissao: 'engenheira'
    },
    {
        nome: 'mario',
        idade: 25,
        profissao: 'professor'
    }
];

pessoas.forEach(pessoa => {
    Object.keys(pessoa).forEach(chave => {
        console.log(`${chave}: ${pessoa[chave]}`)
    })
})