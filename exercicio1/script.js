//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

 const arrayString = ['sacolao']

//A) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
// //```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

arrayString.sacolao = [
    {
      nome: 'banana',
      preco: 4,
      disponibilidade: true, 
    },
    {
      nome: 'uva',
      preco: 8,
      disponibilidade: false,
    },
    {
      nome: 'perâ',
      preco: 2 ,
      quantidade: true ,
    },
  ]

//   b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

arrayString.push("banana", "uva", "perâ");

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(arrayString);



