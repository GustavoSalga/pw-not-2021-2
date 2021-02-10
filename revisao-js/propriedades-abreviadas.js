// Criando um objeto cujo valor das propriedades vem de variáveis

let usuario = 'João'
let senha = 'Deus123'
let name = 'João das Couves'
let lastLogin = '2021-02-08 22:49:28'

let userInfo  = {
    login: usuario,
    password: senha,
    name, // propriedade abreviada (name: name)
    lastLogin // propriedade abreviada (lastLogin: lastLogin)
}

console.log(userInfo)

let info = 'Isto é um teste'

console.log(info) // assim ele apenas da o print da mensagem 'Isto é um teste'
console.log({info}) // assim transformamos a variável em objeto, com isso temos também qual variável é e qual valor ela carrega, quando printamos