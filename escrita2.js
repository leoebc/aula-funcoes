//const ask = require('readline-sync');

//a)
function soma(num1, num2){
    return num1+num2
}

console.log(soma(3, 6))


//b)
function maiorOuIgual(num1, num2){
    return num1>=num2
}

console.log(maiorOuIgual(3, 7))


//c)
function verificaPar(num){
    return num%2 === 0
}

console.log(verificaPar(4))


//d)
function tamanhoEMaiusculo(palavra){
    console.log(`${palavra.toUpperCase()} tem ${palavra.length} caracteres`)
}

tamanhoEMaiusculo('Ryan Gosling')