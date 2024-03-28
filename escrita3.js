const ask = require('readline-sync');

function soma(num1, num2){
    return num1+num2
}

function subtracao(num1, num2){
    return num1-num2
}

function multiplicacao(num1, num2){
    return num1*num2
}

function divisao(num1, num2){
    return num1/num2
}

num1 = Number(ask.question('Insira o primeiro numero:'))
num2 = Number(ask.question('Insira o segundo numero:'))

console.log(soma(num1, num2))
console.log(subtracao(num1, num2))
console.log(multiplicacao(num1, num2))
console.log(divisao(num1, num2))