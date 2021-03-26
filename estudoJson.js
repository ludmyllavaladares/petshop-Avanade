// let petObj = {
//     nome: 'Doug',
//     idade: 4,
//     tipo: 'cachorro',
//     servicos: ["banho", "tosa"],
//     vacinado: false
// };

// // console.log(JSON.stringify(petObj));

// let pets = '{ "nome": "batman"}'

// console.log(JSON.parse(pets));

let bancoDados = require('./bancoDados.json');
let pets = bancoDados.pets;

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    servico();
    
    console.log('Tchau, até mais!');
}

const darBanhoPet = () => {
    console.log('dando banho no pet...');
}

const apararUnhas = () => {
    console.log('aparando unhas...');
}

atenderCliente(pets[0], darBanhoPet);
console.log("=====================");
atenderCliente(pets[2], apararUnhas);

