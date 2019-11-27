// Arrow function   
const soma = (a, b) => a + b
console.log(soma(2,3))

// Arrow function(this)
const lexico = () => console.log(this == exports)
const lexico2 = lexico.bind({})
lexico()
lexico2()

//Param default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Teste')

//operador rest
function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))