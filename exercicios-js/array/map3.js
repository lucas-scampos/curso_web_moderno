Array.prototype.map2 = function (callback) {
    let mappedArray = []

    for(let i = 0; i < this.length ; i++){
        mappedArray.push(callback(this[i], i , this))
    }

    return mappedArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const precos = carrinho.map2(function (e) {
    return JSON.parse(e).preco
})

console.log(precos)