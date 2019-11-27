const pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa']
pilotos.pop() // Retira ultim a elemento
console.log(pilotos)

pilotos.push('Vertstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode remover ou adicionar elementos

// adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos1 = pilotos.slice(1, 4) // novo array
console.log(algunsPilotos2)