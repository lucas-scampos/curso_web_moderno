
//spread objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone  = {ativo:true, ...funcionario}
console.log(clone)

//spread array
const a = [1 , 2 ,3 ]
const final = [3 , ...a , 4]
console.log(final)