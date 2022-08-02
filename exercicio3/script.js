const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

pokemon1Copy = {...pokemon1}
pokemon1Copy.nome = "Squirtle",
pokemon1Copy.tipo = "Água",
pokemon1Copy.nivel = 5

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1Copy.ataques =[]
pokemon1Copy.ataques.push({

nome:'Hydropump',
dano:100,
tipo:'Água',
precisao: 50,
})

console.log(pokemon1Copy)

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

pokemon1.ataques = pokemon1Copy.ataques
console.log(pokemon1)

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques.push({
nome:'Folha Navalha',
dano:40, 
precisao:80,
tipo:'Grama'
})

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

pokemon1Copy.ataques.push({
nome:'Jato de Água',
dano:40,
precisao:100,
tipo:'Água'
})

// f) Imprima os dois objetos no console.

