const nome = 'Lucas'
const concatencao = 'Olá ' + nome + '!'
const template = `
  Olá
  ${nome}
`

console.log(concatencao, template)

//exp
console.log(`1 + 1 = ${1 +1}`) 

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)