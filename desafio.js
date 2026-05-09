const ask = require('readline-sync');

function classificarMana() {
    if (manaValue < 25) {
        return 'MORTO'
    }
}




/*
Níveis de Mana
Crie uma função chamada classificarMana():

mana menor que 25 → "MORTO"
mana entre 25 e 59 → "INSTÁVEL"
mana maior ou igual a 60 → "ESTÁVEL"
*/






let nameOfCrystals = []
let manaValue = []
//Pedindo para o usuario digitar o nome dos cristais e armazenar dentro do array
let cristal1 = ask.question('Digite o nome do primeiro cristal: ');
nameOfCrystals.push(cristal1);

let cristal2 = ask.question('Digite o nome do segundo cristal: ');
nameOfCrystals.push(cristal2);

let cristal3 = ask.question('Digite o nome do terceiro cristal: ');
nameOfCrystals.push(cristal3);

let cristal4 = ask.question('Digite o nome do quarto cristal: ');
nameOfCrystals.push(cristal4);

console.log(nameOfCrystals);

//Ler a mana de cada cristal
let cristal1 = ask.question('Digite a mana do primeiro cristal de 0 a 100');
manaValue.push(cristal1);

let cristal2 = ask.question('Digite a mana do segundo cristal de 0 a 100');
manaValue.push(cristal2);

let cristal3 = ask.question('Digite a mana do terceiro cristal de 0 a 100');
manaValue.push(cristal3);

let cristal4 = ask.question('Digite a mana do quarto cristal de 0 a 100');
manaValue.push(cristal4);



