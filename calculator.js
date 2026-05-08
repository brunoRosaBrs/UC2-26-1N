const ask = require('readline-sync');

//Função para realizar a soma
function sum(num1, num2) {
    console.log(`O resultado de ${num1} + ${num2} eh ${num1 + num2}`)
}

//Função para realizar a subtração
function subtraction(num1, num2) {
    console.log(`O resultado de ${num1} - ${num2} eh ${num1 - num2}`)
}

//Função para realizar a multiplicação
function multiplication(num1, num2) {
    console.log(`O resultado de ${num1} * ${num2} eh ${num1 * num2}`)
}

//Função para realizar a divisão
function division(num1, num2) {
    console.log(`O resultado de ${num1} / ${num2} eh ${num1 / num2}`)
}

//Função para resto da divisão
function restOfDivision(num1, num2) {
    console.log(`O resultado de ${num1} % ${num2} eh ${num1 % num2}`)
}

console.log('Digite uma operacao a ser executada')
console.log('1 - sum\n2 - subtraction\n3 - multiplication\n4 - division\n5 - rest of division')
let operation = Number(ask.question('Digite o numero da operacao a ser executada: '))
let num1 = Number(ask.question('Digite o primeiro numero: '))
let num2 = Number(ask.question('Digite o segundo numero: '))
console.clear()


//Switch Case
switch (operation) {
    case 1:
        sum(num1, num2)
        break;

    case 2:
        subtraction(num1, num2)
        break

    case 3:
        multiplication(num1, num2)
        break

    case 4:
        division(num1, num2)
        break

    case 5:
        restOfDivision(num1, num2)
        break

    default:
        console.log('Operacao Invalida!')

}

