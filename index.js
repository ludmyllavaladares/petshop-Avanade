const nomePetshop = "PETSHOP AVANADE";
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
//     //conversão de objeto JS para JSON
//     let petAtualizado = JSON.stringify(bancoDados, null, 2);
//     //atualização do arquivo bancoDados.json
//     fs.writeFileSync('bancoDados.json', petAtualizado, 'utf-8');
// } 
console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
}

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

const vacinarPet = (pet) => {
    for(let pet of bancoDados.pets){
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}
}

const listarPets = () => {
    // for(let pet of bancoDados.pets){
    //     // template string
    //     console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    //     vacinarPet(pet)

    //     for (const servico of pet.servicos) {
    //         console.log(`${servico}`);
    //     }

    // }
    // bancoDados.pets.forEach((pet) => {

    //     console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);
    
    //     pet.servicos.forEach((servico) => {
    //         console.log(`${servico.data} - ${servico.nome}`);
    //     })
    // })
    // lista todos os pets cadastrados.
    
    console.log("Estes são os pets cadastrados:")

    bancoDados.pets.forEach(pet => {
        let {nome, tipo, raca, tutor} = pet
        
        console.log(`Pet: ${nome}, Tipo: ${tipo}, Raça ${raca}, Tutor: ${tutor}, Serviços:`)
        for (servico in pet.servicos){
            
            console.log(pet.servicos)

        }           
    });
        
    


}

const campanhaVacina = () => {
//     // let naoVacinados = 0;
//     // for(let pet of bancoDados.pets){
//     //     if(pet.vacinado === false){
//     //         naoVacinados++;
//     //     }
//     // }
//     // console.log("=====================");
//     // console.log(`${naoVacinados} pet(s) deve(m) ser vacinados!`);
// }
console.log("Campanha de vacina 2021");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;

    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }

        return pet;
    });
}

const adicionarPet = (petNovo) => {
        bancoDados.pets.push(petNovo);
        atualizarBanco();
        console.log(`${petNovo.nome} Foi adicionado com sucesso!`);
}

const verData = () => {
    let datetime = new Date()
    let formatted_date = datetime.getFullYear() + "/" + (datetime.getMonth() + 1) + "/" + datetime.getDate() + " " + datetime.getHours() + ":" + 
    datetime.getMinutes() + ":" + datetime.getSeconds();
    console.log(`Data e Hora do Serviço: ${formatted_date}`)

}

const darBanhoPet = () => {
    for(let pet of bancoDados.pets){
    const tomouBanho = pet.servicos.includes('banho');
    tomouBanho == true ? console.log(`${pet.nome} já tomou banho`) : null;
    // if(tomouBanho == true){        
    //     console.log(`${pet.nome} já tomou banho`)
    //     verData();
    // }
}
}
const tosarPet = () => {
    console.log("=============================");
    for(let pet of bancoDados.pets){
    const tosado = pet.servicos.includes('tosa');
    tosado == true ? console.log(`${pet.nome} Já foi tosado`) : null;
    // if(tosado == true){       
    //     console.log(`${pet.nome} está com o pelinho na régua`)
    //     verData();
    // }
}
}
const apararUnhasPet = () => {
    console.log("=============================");
    for(let pet of bancoDados.pets){
    const unhasAparadas = pet.servicos.includes('unhas aparadas');
    unhasAparadas == true ? console.log(`${pet.nome} Já fez a unha`) : null;
    // if(unhasAparadas == true){       
    //     console.log(`${pet.nome} está de unhas aparadas`)
    //     verData();
    // }
}
}

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    servico(pet);
    console.log('Até mais!');
}

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {
    // && E - AND
    // || OU - OR
    // == verifica valores iguais
    // === verifica valores e tipos iguais
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let{nome} = pet;

    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${nome}! Você ainda não tem descontos disponiveis!`);
    }
}

const contatoTutor = (pet) => {
    let { nome, tutor, contato} = pet;

    return `Tutor: ${tutor}
            Contato: ${contato}
            Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    });

    console.log(`Pets do tutor ${nomeTutor}:`)
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`)
    })
}

//filtrarTutor('Lud');
//console.log(contatoTutor(bancoDados.pets[0]));
listarPets();
//campanhaVacina();
//darBanhoPet();
//tosarPet();
// apararUnhasPet();
//atualizarBanco();
//atenderCliente(bancoDados.pets[0], darBanhoPet);
//buscarPet();
//filtrarTipoPet();
//clientePremium(bancoDados.pets[1]);

// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// clientePremium(bancoDados.pets[4])
// console.log(buscarPet('Bidu'));
// console.log(clientePremium(bancoDados.pets[2]));

// adicionarPet({     
// "nome": "Blanco",
// "tipo": "cachorro",
// "idade": 2,
// "raca": "maltes",
// "tutor": "Levita",
// "contato": "(81) 91111-5533",
// "vacinado": true,
// "servicos": [
// "banho",
// "vacina"]})
