let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { //funcao arrow é sempre anonima
    return 2 * a
}

dobro = a => 2 * a

let ola = function(){
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola'
console.log(ola())