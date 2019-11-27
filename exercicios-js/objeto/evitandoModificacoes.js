//Object.preventExtensions
//pode modificar atributos criados, porem nao pode criar novos
// pode deletar atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco : 1.99, tag : 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
// n pode deletar, n pode adicionar
// pode modificar
const pessoa = { nome : 'Juliana', idade : 35}
Object.seal(pessoa)

//Object.freeze = seleado + valores constantes