console.log(Math.min(14, 7, -3, 23, 34)) // Retorna o menor valor passado
console.log(Math.max(14, 7, -3, 23, 34)) // Retorna o maior valor passado

// Colocando os números dentro de um vetor
let numeros = [14, 7, -3, 23, 34]
console.log(Math.min(numeros)) // Ao executar vamos perceber que obtemos NaN, não conseguimos usar o Math assim
console.log(Math.max(numeros)) // Ao executar vamos perceber que obtemos NaN, não conseguimos usar o Math assim

// Usando ESPALHAMENTO para "desmontar" o vetor
let numeros1 = [14, 7, -3, 23, 34]
console.log(Math.min(...numeros1))
console.log(Math.max(...numeros1))

// Usando ESPALHAMENTO para "desmontar" um vetor dentro de um vetor
let maisNumeros =[4, 0, 11, ...numeros1, 8, 19, 26]
console.log(maisNumeros)

// Função que adquira uma quantidade arbitrária de números, some eles e retorne o resultado 
// (a função deve ser capaz de somar 3 números, ou 10, ou 1 milhão, etc)
// Se chama FUNÇÃO COM PARÂMETRO DE RESTO (ou argumento de resto)
function somaTudo(...nums){ // o ...nums significa que pode receber quantos numeros for necessário e serão alocados dentro dessa função
    let soma = 0
    for(let n of nums) soma += n
    return soma
}
console.log(somaTudo(12, 45, -5))
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30))

console.log('--------------------------')

// Mesma função acima mas para multiplicar o primeiro argumento e somar o segundo
function calcular(oper, ...nums){ // Argumento convencional (deve vir primeiro) + argumento de resto
    let res
    switch(oper){
        case '+':
            // res = 0 //
            // for (let n of nums) soma += n // esses dois comentários são no caso de uma função nova
            res = somaTudo(...nums) // como fizemos a função somaTudo acima, podemos aproveitá-la
            break
        
        case '*':
            res = 1
            for (let n of nums) res *= n 
    }
    return res
}
console.log(calcular('*', 12, 45, -5))
console.log(calcular('+', 2, 76, -2, 41, 19, 11, 22, 30))

// Como chamar a função somaTudo() para processar o vetor maisNumeros?
console.log(somaTudo(...maisNumeros))
console.log(calcular('+', ...maisNumeros))