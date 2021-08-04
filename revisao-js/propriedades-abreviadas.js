/* let infoUsuario = {
    nome: 'Jucicleison',
    nomeCompleto: 'Jucicleison da Silva Souza',
    grupo: 'alunos',
    senha: '12345678'
}

console.log(infoUsuario) */

let usuario = 'Jucicleison'
let nome = 'Jucicleison da Silva Souza'
let grupo = 'alunos'
let password = '12345678'

// quando a variável tem o mesmo nome da propriedade, podemos abreviar 
let infoUsuario = {
    usuario, // usuario: usuario,
    nomeCompleto: nome,
    grupo, // grupo: grupo,
    senha: password,
}

console.log(infoUsuario)

// Exibindo o conteúdo da variável 'password para fins de depuração
console.log(password)
console.log({password})
console.log({password, grupo})
