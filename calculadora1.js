const ask = require('readline-sync');

//FUNCAO PARA SOMA
function sum(num1, num2) {
    console.log(`O resultado de ${num1} + ${num2} eh ${num1 + num2}`)
}

//FUNCAO PARA SUBTRACAO
function subtraction(num1, num2) {
    console.log(`O resultado de ${num1} - ${num2} eh ${num1 - num2}`)
}

//FUNCAO PARA MULTIPLICACAO
function multiplication(num1, num2) {
    console.log(`O resultado de ${num1} * ${num2} eh ${num1 * num2}`)
}

//FUNCAO PARA DIVISAO
function division(num1, num2) {
    console.log(`O resultado de ${num1} / ${num2} eh ${num1 / num2}`)
}

//FUNCAO PARA RESTO DA DIVISAO
function restOfDivision(num1, num2) {
    console.log(`O resultado de ${num1} % ${num2} eh ${num1 % num2}`)
}


console.log('Digite o numero da operacao a ser executada')
console.log('1 - Sum');
console.log('2 - Subtraction')
console.log('3 - Multiplication')
console.log('4 - Division')
console.log('5 - rest of division')

let operacao = Number(ask.question("Digite o numero da operacao: "))

let num1 = Number(ask.question("Digite o primeiro numero: "))
let num2 = Number(ask.question("Digite o segundo numero: "))


// Switch case
switch (operacao) {
    case 1:
        sum(num1, num2)
        break;

    case 2:
        subtraction(num1, num2)
        break;

    case 3:
        multiplication(num1, num2)
        break;

    case 4:
        division(num1, num2)
        break;

    case 5:
        restOfDivision(num1, num2)
        break;

    default:
        console.log("Operacao invalida!");
}


