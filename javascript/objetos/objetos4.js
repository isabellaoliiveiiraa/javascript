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
console.log(keys[2]); // ['name', 'age', 'city']
 