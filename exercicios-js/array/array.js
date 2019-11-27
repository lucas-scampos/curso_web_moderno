console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.push('Lucas')

console.log(aprovados)
aprovados[9] = 'Lous'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
aprovados.sort()
console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)
aprovados.splice(1, 0, 'Lucas', 'Teste')
console.log(aprovados)




