function tratarErro(e){
    throw 'whatever'
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()) + '!!'
    }catch(e){
        tratarErro(e)
    }
}


const obj = { nome : 'Lucas'}
imprimirNomeGritado(obj)