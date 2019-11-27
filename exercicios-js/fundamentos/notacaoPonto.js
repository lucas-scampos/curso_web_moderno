
function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec')
    }
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome)