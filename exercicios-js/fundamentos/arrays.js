const valores = [1, 2, 3 , 4.5]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[10] = 10
console.log(valores)

valores.push({ id:3}, false, null , 'teste')

console.log(valores)
console.log(valores.pop()) // Retirar e retornar ultimo elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)

