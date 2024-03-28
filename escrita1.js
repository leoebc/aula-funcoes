//const ask = require('readline-sync');

function infosPessoaisSemParametros() {
    console.log('Meu nome é Leonardo e eu tenho 23 anos. Moro em Canoas e sou alcoolatra')
}

function infosPessoaisComParametros(nome, idade, cidade, superpoder){
    return(`Meu nome é ${nome} e eu tenho ${idade} anos. Moro em ${cidade} e sou ${superpoder}`)
}

console.log(infosPessoaisComParametros('Jair Renan', 25, 'Balneário Camboriú', 'réu por lavagem de dinheiro'))