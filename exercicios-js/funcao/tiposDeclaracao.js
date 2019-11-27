//function declaration
console.log(soma(3,5))
// console.log(mult(3,5)) nao funciona

function soma(x , y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x -y
}

console.log(sub(3,4))

//named function
const mult  = function(x,y){
    return x * y
}
console.log(mult(3,5))