function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem vindo' , 134)
const aula2 = new Aula('Bem vindo' , 452)
console.log(aula1, aula2)

//simulando o new
function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.protype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 134)
const aula4 = novo(Aula, 'Bem vindo', 452)
console.log(aula3, aula4)

const teste = {}
Aula.apply(teste, [])

console.log(teste)