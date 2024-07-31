// 1 - criando uma função 
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao()

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
};

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");

funcaoComParametro("outra função");

// 2 - return

const a = 10
const b = 20
const c = 30

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a,b);

console.log(resultado);