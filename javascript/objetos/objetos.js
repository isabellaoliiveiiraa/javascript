//sintaxe basica
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };

  //exemplo de objeto dentro de objeto
  const pessoa = {
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
  console.log(pessoa.nome);          // João
  console.log(pessoa.endereco.rua);  // Rua das Flores
  console.log(pessoa.endereco.cidade); // São Paulo

  //Exemplo de um array contendo vários objetos:
  const pessoas = [
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
    {
      nome: "Maria",
      idade: 22,
      profissao: "Designer"
    }
  ];
  
  // Acessando os objetos no array
  console.log(pessoas[0].nome); // Ana
  console.log(pessoas[1].idade); // 35
  console.log(pessoas[2].profissao); // Designer

  const empresa = {
    funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
    funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
    funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
  };
  
  // Acessando os objetos dentro do objeto 'empresa'
  console.log(empresa.funcionario1.nome); // Ana
  console.log(empresa.funcionario2.cargo); // Professor
  console.log(empresa.funcionario3.idade); // 22

  //Adicionando objetos dentro de objetos dinamicamente:
  const pessoa = {
    nome: "Ana",
    idade: 25
  };
  
  // Adicionando o objeto 'endereco' depois
  pessoa.endereco = {
    rua: "Avenida Central",
    numero: 456,
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };
  
  console.log(pessoa.endereco.cidade); // Rio de Janeiro

  //Adicionando um novo objeto ao array:
  const pessoas = [
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
  pessoas.push({
    nome: "Pedro",
    idade: 40,
    profissao: "Médico"
  });
  
  console.log(pessoas[2].nome); // Pedro

  //Exemplo de remoção de um objeto:
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

  //Usando Object.assign() para mesclar objetos
  const pessoa = {
    nome: "João",
    idade: 30
  };
  
  const novoEndereco = {
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  };
  
  // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
  Object.assign(pessoa, novoEndereco);
  
  console.log(pessoa);
  /*
  Saída:
  {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  }
  */

  //Criando um Array somente com as chaves do objeto
  const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

//Object.values()

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const values = Object.values(person);
console.log(values); // ['John', 30, 'New York']

