//pessoas
const pessoa3 = {
    nome: 'ana', 
    idade: 25
}
pessoa3.endereco = {
    rua: 'avenida cetral',
    numero: 123,
    cidade: 'sao paulo',
    estado: 'sp'
};
console.log(pessoa3.endereco.cidade);


//push: adicionando um novo objeto
const pessoas4 = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
  ];
  pessoas4.push({
    nome: "Pedro",
    idade: 40,
    profissao: "Médico"
  });
  
  console.log(pessoas4[2].nome); // Pedro

  //exemplo de remocao de objetos
  const empresa = {
    nome: "Tech Solutions",
    fundacao: 2010,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Removendo o objeto 'endereco'
  delete empresa.endereco;
  
  console.log(empresa);
  /*
  Saída:
  {
    nome: "Tech Solutions",
    fundacao: 2010
  }
  */

  