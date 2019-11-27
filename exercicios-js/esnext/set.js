// n aceite repeticao / n indexado

const times = new Set()
times.add('Vasco')
times.add('Sao paulo').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')

const nome = ['Raquel', 'Lucas', 'Lucas']
const nomeSet = new Set(nome)
console.log(nomeSet)