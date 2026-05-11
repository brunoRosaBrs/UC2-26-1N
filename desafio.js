const ask = require('readline-sync');

//NÍVEIS DE MANA

function classificarMana(mana) {
    if (mana < 25) {
        return 'MORTO';
    } else if (mana >= 60) {
        return 'ESTÁVEL';
    } else {
        return 'INSTÁVEL';
    }
}



console.log('===== TORRE DE ELDORIA =====');
//Criação de arrays vazios de nomes de cristais e valores de mana
let nameOfCrystals = []
let mana = []

//Pedindo para o usuario digitar o nome dos cristais e armazenar dentro do array
let cristal1 = ask.question('Digite o nome do primeiro cristal: ');
nameOfCrystals.push(cristal1);

let cristal2 = ask.question('Digite o nome do segundo cristal: ');
nameOfCrystals.push(cristal2);

let cristal3 = ask.question('Digite o nome do terceiro cristal: ');
nameOfCrystals.push(cristal3);

let cristal4 = ask.question('Digite o nome do quarto cristal: ');
nameOfCrystals.push(cristal4);



//Ler a mana de cada cristal
let mana1 = Number(ask.question('Digite a mana do primeiro cristal de 0 a 100: '));
mana.push(mana1);

let mana2 = Number(ask.question('Digite a mana do segundo cristal de 0 a 100: '));
mana.push(mana2);

let mana3 = Number(ask.question('Digite a mana do terceiro cristal de 0 a 100: '));
mana.push(mana3);

let mana4 = Number(ask.question('Digite a mana do quarto cristal de 0 a 100: '));
mana.push(mana4);







