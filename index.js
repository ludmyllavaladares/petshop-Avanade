const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Sansão',
        tipo: 'cachorro',
        idade: 8,
        reca: 'schnauzer',
        tutor: 'Lud',
        contato: '(81) 99999-0000',
        vacinado: true,
        serviços: ['banho', 'tosa', 'vacina', 'hotelzinho']
    },
    {
        nome: 'Biscoito',
        tipo: 'gato',
        idade: 2,
        reca: 'SDR',
        tutor: 'Bruno',
        contato: '(81) 92222-8888',
        vacinado: false,
        serviços: ['banho']
    },
    {
        nome: 'Dalila',
        tipo: 'cachorro',
        idade: 5,
        reca: 'pastor-alemão',
        tutor: 'Pedro',
        contato: '(81) 91111-5555',
        vacinado: true,
        serviços: ['banho','vacina']
    },
    {
        nome: 'Frida',
        tipo: 'cachorro',
        idade: 13,
        raca: 'schnauzer',
        tutor: 'João Henrique',
        contato: '(81) 99999-4565',
        vacinado: true,
        serviços: ['banho', 'tosa', 'vacina', 'medicação']
    },
];

const listarPets = () => {
    for(let pet of pets){
        // template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.idade}`);
    }
}

listarPets();
// console.log(pets);