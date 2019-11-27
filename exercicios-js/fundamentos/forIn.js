const pessoa = {
    nome : 'Ana',
    idade : 60,
    peso: 59
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}