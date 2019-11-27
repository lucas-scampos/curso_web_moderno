// let e const
{
    var a = 2
    let b = 3
}

console.log(a)

//destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: "lucas", idade: 3 }
console.log(i, nome)