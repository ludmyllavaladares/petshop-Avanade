const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Sansão',
        tipo: 'cachorro',
        idade: 8,
        raca: 'schnauzer',
        tutor: 'Lud',
        contato: '(81) 99999-0000',
        vacinado: true,
        servicos: ['banho', 'tosa', 'vacina', 'hotelzinho']
    },
    {
        nome: 'Biscoita',
        tipo: 'gato',
        idade: 2,
        raca: 'SDR',
        tutor: 'Bruno',
        contato: '(81) 92222-8888',
        vacinado: false,
        servicos: ['banho', 'unhas aparadas']
    },
    {
        nome: 'Dalila',
        tipo: 'cachorro',
        idade: 5,
        raca: 'pastor-alemão',
        tutor: 'Pedro',
        contato: '(81) 91111-5555',
        vacinado: true,
        servicos: ['banho','vacina']
    },
    {
        nome: 'Frida',
        tipo: 'cachorro',
        idade: 13,
        raca: 'schnauzer',
        tutor: 'João Henrique',
        contato: '(81) 99999-4565',
        vacinado: true,
        servicos: ['banho', 'tosa', 'vacina', 'medicação']
    },
];

const listarPets = () => {
    for(let pet of pets){
        // template string
        // console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.idade}`);
        // console.log(pet.nome);
        // vacinarPet(pet.vacinado, pet.nome);

    }
}

const vacinarPet = (vacinado, nome) => {
    if(vacinado === false) {      
            console.log(`${nome} não foi vacinado(a)`);
        }
    }

const campanhaVacina = () => {
    let naoVacinados = 0;
    for(let pet of pets){
        if(pet.vacinado === false){
            naoVacinados++;
        }
    }

    console.log("=====================");
    console.log(`${naoVacinados} pet(s) deve(m) ser vacinados!`);
}

const adicionarPet = () => {
    const petNovo = {
        nome: 'Blanco',
        tipo: 'cachorro',
        idade: 1,
        raca: 'maltês',
        tutor: 'Levita',
        contato: '(81) 99999-3399',
        vacinado: false,
        servicos: ['']

    }
    pets.push(petNovo);
}

const darBanhoPet = () => {
    for(let pet of pets){
    const tomouBanho = pet.servicos.includes('banho');
    if(tomouBanho == true){
        
        console.log(`${pet.nome} já tomou banho`)
    }
}
}
const tosarPet = () => {
    console.log("=============================");
    for(let pet of pets){
    const tosado = pet.servicos.includes('tosa');
    if(tosado == true){
        
        console.log(`${pet.nome} está com o pelinho na régua`)
    }
}
}
const apararUnhasPet = () => {
    console.log("=============================");
    for(let pet of pets){
    const unhasAparadas = pet.servicos.includes('unhas aparadas');
    if(unhasAparadas == true){
        
        console.log(`${pet.nome} está de unhas aparadas`)
    }
}
}


adicionarPet();
vacinarPet();
listarPets();
campanhaVacina();
console.log("===========================");
darBanhoPet();
tosarPet();
apararUnhasPet();