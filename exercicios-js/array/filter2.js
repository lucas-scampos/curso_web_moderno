Array.prototype.filter2 = function(callback){
    const filteredArray = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i , this)){
            filteredArray.push(this[i])
        }
    }

    return filteredArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12, fragil: true },
    { nome: 'Copo de plastico', preco: 15, fragil: false },
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))