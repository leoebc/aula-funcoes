const imprimirValor = (variavel) => {
    console.log(variavel);
}

const somarEImprimir = (valor1, valor2) => {
    const resultado = valor1 + valor2;
    imprimirValor(resultado);
}

const hipotenusa = (cateto1, cateto2) => {
    imprimirValor(Math.sqrt((cateto1 ** 2) + (cateto2 **2)))
}

somarEImprimir(5, 6)
hipotenusa(3, 4)

