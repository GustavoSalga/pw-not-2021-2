// Parâmetros predefinidos ou opcionais em funções
// Regras:
// 1) Parâmetros opcionais devem vir após os obrigatórios

// forma como parâmetrido predefinido ou opcional
function calcularArea(base, altura, forma = 'Q', casasDec = 2) { // podemos também fazer calcularArea(base, altura, forma) mas usando assim devemos chamar o case no console.log
    let res
    switch(forma) {
        case 'Q': // Quadrilátero
         res = base * altura
         break
        case 'T': // Triângulo
         res = base * altura / 2
         break
        case 'E': // Elipse
         res = (base / 2) * (altura / 2) * Math.PI
    }
    return res.toFixed(casasDec) // casasDec define as casas decimais
}

console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E')) // base igual e área igual é um círculo, podemos usar a Elipse
console.log(calcularArea(30, 60)) // Como o forma = 'Q' ele considera o quadrilátero
// Caso seja necessário omitir um parâmetro predefino que não seja o último, pode-se usar o valor undefined em seu lugar
console.log(calcularArea(30, 60, undefined, 3))