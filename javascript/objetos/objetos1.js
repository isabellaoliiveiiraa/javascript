let fruta = 'maca' //criacao da variavel

let frutas = ['maca', 'banana', 'uva'] //criacao de array

let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };

  //Exemplo de objeto dentro de objeto:
  const pessoas = {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Acessando propriedades do objeto 'endereco'
  console.log(pessoas.nome);          // João
  console.log(pessoas.endereco.rua);  // Rua das Flores
  console.log(pessoas.endereco.cidade); // São Paulo



  //Objeto contendo vários objetos
  const empresa = {
    funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
    funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
    funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
  };
  
  // Acessando os objetos dentro do objeto 'empresa'
  console.log(empresa.funcionario1.nome); // Ana
  console.log(empresa.funcionario2.cargo); // Professor
  console.log(empresa.funcionario3.idade); // 22
  empresa.funcionario3.idade = 23
  console.log(empresa.funcionario3.idade)



  