let nome = "João"
let idade = 26

// mensagem usando concatenação
console.log('Meu nome é ' + nome + ' e minha idade é ' + idade + '.')

// mensagem usando TEMPLATE LITERAL
console.log(`O meu nome é ${nome} e minha idade é ${idade}.`)
// colocando o nome em caps lock
console.log(`O meu nome é ${nome.toUpperCase()} e minha idade é ${idade}.`)
// outro exemplo de TEMPLATE LITERAL
console.log(`7 vezes 6 é igual a ${7 * 6}.`)

// tentando usar TEMPLATE LITERAL com outro tipo de aspas
console.log("O meu nome é ${nome} e minha idade é ${idade}.") // ou seja o que faz funcionar o TEMPLATE LITERAL são as aspas invertidas ` `