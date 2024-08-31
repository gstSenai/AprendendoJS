// 1 - strict
"use strict";

//opa = "teste";

const opa = "teste";

//const undefined = "teste2";

// delete [].length

// 2 - console.log

let a = 1
let b = 2

if (a === 1) {
    a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if (a > 5) {
    a = 25;
}

console.log(a);

// 3 - debugger
let c = 1
let d = 2

if (c == 1) {
    c = d + 2;
}

//debugger;

for (let i = 0; i < d; i++) {
    d = c + 2;
}

console.log("executou o loop");

//debugger;

if (c > 5) {
    c = 25;
}

// 4 - tratamento de dados
function checkNumber(n) {

    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log("Valor Incorreto!");
        return
    }
    console.log("Valor Correto!");
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 - exceptions
let x = 10

if (x != 11) {
    // throw new Error("O valor de x nao pode ser diferente de 11!")
}

// 6 - try catch
try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa: ${error}`);
}

// 7 - Finally
try{
    const value = checkNumber("1")
    if(!value){
        throw new Error("Valores Inválidos")
    }
}catch(error){
    console.log(`Opa, aconteceu um problema: ${error}`);
}finally{
    console.log("O código foi executado");
}

// 8 - assertion
function checkArray(arr) {
    if(arr.length === 0){
        throw new Error("O Array precisa ter elementos");
    }else{
        console.log(`O array tem ${arr.length} elemetos`);
    }
}

// checkArray([])

checkArray([1,2,3])