Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    let atual

    for (let i = indiceInicial; i < this.length; i++) {
        atual = this[i]
        acumulador = callback(acumulador, atual, i , this)
    }

    return acumulador
}

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false },
]

const resultado = alunos.map(a => a.nota).reduce2(function (acumulador, atual) {
    console.log(acumulador, atual)

    return acumulador + atual
}, 10)

console.log(resultado)