// Função que eleva um número ao quadrado
// Se precisar disso em uma situação real, use Math.pow() ou o operador **

function quadrado(n) {
    return n * n
}
console.log(quadrado(9))

// Características da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

console.log('-------------------')

// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) A palavra function é substituída pelo sinal =>, DEPOIS do parâmetro
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n * n // (ARROW FUNCTION)
console.log(quadrado2(8), quadrado2(8))

console.log('-------------------')

// Função com mais de um argumento (CONVENCIONAL)
function potencia(b, e) {// b é a base e o e é o expoente
    return b ** e
}

// Função com 1+ argumentos, os parênteses em volta deles devem retornar (ARROW FUNCTION)
let potencia2 = (b, e) => b ** e

console.log(potencia2(2, 6), potencia2(2, 6))

console.log('-------------------')
// Função SEM argumentos (CONVENCIONAL)
function megasena() {
    // Retornar um número aleatório entre 1 e 60
    // Math.random retornar um número fracionário aleatório entre 0 e 1
    // Multiplicando por 60 -> Temos um número entre 0 e 59 (Ainda fracionário)
    // Soma 1 -> Ajusta a faixa para 1 e 60
    // floor() vai retirar as casas decimais
    return Math.floor(Math.random() * 60 + 1)
}
console.log(megasena(), megasena(), megasena())

console.log('-------------------')

// Quando não há argumentos, os parênteses marcam o lugar deles (ARROW FUNCTION)
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2(), megasena2(), megasena2())

console.log('-------------------')

// Função com mais de uma linha de código no corpo (CONVENCIONAL)
function somaTudo(...nums){
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// Arrow Function para corpos com mais de uma linha (ARROW FUNCTION)
// Neste caso, voltam as chaves {}
// (Os parênteses em torno do argumento são necessários, por se tratar de um argumento de resto)
let somaTudo2 = (...nums) => {
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// Conclusão: o formato arrow function é indicado quando a função se resolve em apenas uma linha 
// ou poucas linhas, como exceção