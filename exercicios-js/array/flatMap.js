const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Lucas',
        nota: 10
    }, {
        nome: 'Ana',
        nota: 8
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Arara',
        nota: 10
    }, {
        nome: 'Mister m',
        nota: 9
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 10, 8 ], [ 10, 9 ]))

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotasDaTurma)
console.log(notas2)