const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false },
]

//Todos alunos sao bolsistas?
const todosBolsista = (resultado, bolsista) => resultado && bolsista
const todosAlunosBolsistas = alunos.map(e => e.bolsista).reduce(todosBolsista)
console.log(todosAlunosBolsistas)

//Algum aluno é bolsista?
const algumAlunoBolsista = alunos.map(e => e.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})
console.log(algumAlunoBolsista)
