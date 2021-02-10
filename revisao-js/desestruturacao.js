let vetor = [10, 20, 30] // declaração do vetor

let objeto = { // declaração da variável objeto
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}
// Desestruturação de vetor, as variáveis do let podem ter qualquer nome que serão associadas
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

/*  Desestruturação de objeto as variáveis do let devem ter o mesmo nome para serem associadas - Neste exemplo está errado e não funciona
let {pessoa, anos, cidade} = objeto
console.log(pessoa)
console.log(anos)
console.log(cidade) */

// Desestruturação de objeto as variáveis do let devem ter o mesmo nome para serem associadas - Neste exemplo FUNCIONA

let {nome, idade, naturalidade} = objeto
console.log(nome)
console.log(idade)
console.log(naturalidade)

let objeto2 = { // declaração da variável objeto
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'Preto'
}

// Desestruturação parcial de um objeto
let {modelo, ano} = objeto2
console.log(modelo)
console.log(ano)

let vet2 =['Laranja', 'Maçâ', 'Pera']

/*Não dá certo: Desestruturação parcial de vetor
let [undefined, fruta2, undefined] = vet2
console.log(fruta2) */

// Ignorando o último elemento
let [fruta1, fruta2] = vet2
console.log(fruta1)
console.log(fruta2)

//Ignorando o primeiro elemento (é possível ignorar mais de um elemento)
let [, f2, f3] = vet2
console.log(f2)
console.log(f3)
