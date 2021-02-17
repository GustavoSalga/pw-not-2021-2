let nota = 7.2
let situacao

/* 
if(nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
} 
*/

/*
Melhorando a expressão acima:
if(nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'
*/

// Melhorando ainda mais a expressão, usando operador ternario
// As três partes do operador ternário
// 1° parte: condição (que iria depois do if nos exemplos acima)
// Entre a 1° e 2° parte temos -> ?
// 2° parte: o resultado, caso a condição seja VERDADEIRA
// Entre 2° e 3° parte temos -> :
// 3° parte: o resultado, caso a condição seja FALSA

situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(situacao)

let user= 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user' // Se o user for admin ou root, serei um Superuser, caso contrário um Ordinary User

console.log(userType)