// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calculo(x, y) {
    console.log(`Soma: ${x + y}`)
    console.log(`Subtracao: ${x - y}`)
    console.log(`Multiplicacao: ${x * y}`)
    console.log(`Divisao: ${x / y}`)
}
calculo(2, 2)
calculo(6, 2)

// Arrow function
let arrow = (x, y) => {
    console.log(`2) Soma: ${x + y}`)
    console.log(`2) Subtracao: ${x - y}`)
    console.log(`2) Multiplicacao: ${x * y}`)
    console.log(`2) Divisao: ${x / y}`)
}
arrow(2, 2)
arrow(6, 2)