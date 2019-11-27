const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12, fragil: true },
    { nome: 'Copo de plastico', preco: 15, fragil: false },
]

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))