let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
      return `O carro ${this.marca} ${this.modelo} está ligado.`;
    }
  };
  
  console.log(carro.ligar()); // "O carro Toyota Corolla está ligado."
  carro.ano = 2021; // Atualizando o ano
  console.log(carro.ano); // 2021