console.log('1' == 1) //true
console.log('1' === 1) //false
console.log('3' != 3) //false
console.log('3' !== 3) //true

const d1 = new Date()
const d2 = new Date()

console.log(d1 === d2) //false
console.log(d1 == d2) // false
console.log(d1.getTime() == d2.getTime()) // true
console.log(undefined == null) //true 
console.log(undefined === null) //false 