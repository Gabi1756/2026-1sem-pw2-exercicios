//  Dado um array de números, calcule a soma de todos eles (ex: [1,2,3,4] → 10)

const valores = [1,2,3,4,5,6,7,8,9,10];

const soma = valores.reduce((acumulador, elememnto) => acumulador + elememnto, 0);

console.log(soma);