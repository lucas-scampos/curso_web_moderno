//closure é o escopo criado quando uma função é declarada 
//esse tipo de escopo permite a função acessar e manipular variáveis externas à função 	

// contexto lexico em acao

const x= 'Global'

function fora(){
    const x = 'Local'

    function dentro(){
        return x 
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
