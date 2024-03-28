let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function (texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


/*
a. Explique o que essa função faz e qual é sua utilidade
    transforma o input do usuário em lower case e retorna true caso o input inclua 'cenoura' ou false caso não inclua

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     true

     ii.  `CENOURA é bom pra vista`
     true
     
     iii. `Cenouras crescem na terra`
     true
*/