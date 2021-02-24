const pets = [
    {
        nome: 'Mel',
        especie: 'cão',
        idade: 2,
        sexo: 'F',
        peso: 5.2
    },
    {
        nome: 'Paçoca',
        especie: 'gato',
        idade: 8,
        sexo: 'F',
        peso: 3.2
    },
    {
        nome: 'Cerberus',
        especie: 'cão',
        idade: 6,
        sexo: 'M',
        peso: 22
    },
    {
        nome: 'Matusalém',
        especie: 'tartaruga',
        idade: 102,
        sexo: 'M',
        peso: 30
    },
    {
        nome: 'Paco',
        especie: 'papagaio',
        idade: 56,
        sexo: 'M',
        peso: 1
    },
    {
        nome: 'Mingau',
        especie: 'gato',
        idade: 4,
        sexo: 'M',
        peso: 2.5
    }
]

// find(): retorna a PRIMEIRA ocorrência que corresponda ao critério informado
// Retorna undefined quando não encontra nenhum elemento coincidente
console.log(pets.find(elemento => elemento.peso > 10)) // pode-se usar qualquer nome de variável
console.log(pets.find(pets => pets.idade < 4)) // pode-se usar qualquer nome de variável e repetí-las
console.log(pets.find(pets => pets.especie === 'gato' && pets.sexo == 'M'))
console.log(pets.find(pets => pets.especie == 'calopsita'))

console.log('-------------------')

// some(): retorna true caso haja ALGUM elemento que corresponda ao critérios
// ou false caso contrário
console.log(pets.some(pet => pet.nome === 'Cerberus'))
console.log(pets.some(pet => pet.especie === 'tartaruga' && pet.sexo === 'F'))

console.log('-------------------')
// every(): retorna true caso TODOS os elementos  correspondam ao critério
// ou false caso o contrários
console.log(pets.every(pet => pet.especie === 'cão'))
console.log(pets.every(pet => pet.peso >= 1))

console.log('-------------------')
// filter(): retorna um novo vetor contendo apenas os elementos que correspondem ao critério passado
console.log(pets.filter(pets => pets.especie === 'gato'))
console.log(pets.filter(pets => pets.idade > 20))
console.log(pets.filter(pets => pets.sexo === 'F' && pets.especie === 'papagaio'))

console.log('-------------------')
// map(): cria um novo vetor COM MESMO número de elementos do vetor original, correspondendo
// a algum tipo de transformação

console.log(pets.map(pets => pets.nome.toUpperCase())) // .topUpperCase(): transforma tudo em CAPS LOCK


console.log('-------------------')
const numeros =[2, 6, -3, 9, 5, -7, 1, 4]
console.log(numeros)
// Criando um novo vetor em que cada elemento corresponde ao elemento do vetor original
// elevando ao quadrado
console.log(numeros.map(x => x ** 2))

console.log('-------------------')
// reduce(): reduz um vetor de valores a um único valor.
// Parâmetros:
// 1) acumulador: resultado parcial até o momento
// 2) valor atual: o resultado correspondente ao elemento atual, que integrará o acumulador

// Soma com reduce() "No Exemplo do vetor acima temos os valores --> acum = 2 + val = 6, depois temos acum = 8 + val = -3
// depois temos acum = 5 + val = 9, etc"
console.log(numeros.reduce((acum, val) => acum + val)) // acum = acumulador e val = valor atual

// Multiplicação com reduce() // Funciona igual a Soma
console.log(numeros.reduce((acum, val) => acum * val))

// Concatenação de Strings
let p1 = 'Bom '
let p2 = 'galera!'
console.log([p1, 'dia ', p2].reduce((acum, val) => acum + val))

console.log('-------------------')
/**********************************
 * SOMAR O PESO DE TODOS OS PETS
 */

// 1° abordagem: Criando um vetor auxiliar contendo apenas os pesos dos pets
let pesos = pets.map(pet => pet.peso)
console.log(pesos) // Mostrando o novo vetor, agora só criar a soma usando o reduce()
console.log(pesos.reduce((a, v) => a + v)) // a = acumular e v = valor total

// 2° abordagem: fazendo map() + reduce() em uma linha, mesma coisa da 1° abordagem mas em uma linha só
console.log(pets.map(pet => pet.peso). reduce((a, v) => a + v))

// 3° abordagem: reduce() com parâmetros extras, usados em casos específicos
console.log(pets.reduce((a, v) => a + v.peso, 0)) // a = acumulador, v = valor atual, o 0 indica que o a começa valendo zero
console.log('-------------------')

// includes(): retorna true caso o vetor inclua o valor informado
console.log(numeros.includes(6))
console.log(numeros.includes(11))

// Diferença de some() e includes()
// some() --> recebe uma função para testar a existência de uma condição
// includes() --> recebe um valor simples (não tem arrow function) para testar a existência