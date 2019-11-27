for (let letra of 'Coder') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisa']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }],
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch , vl)
}