// 1 - variáveis

// let é utilizado para declarar uma variavel que pode ser alterada 
let nome = "Gustavo";

console.log(nome)


// const é utilizado para declarar uma variavel imutavel
const idade = 19;

console.log(idade)

//idade = 30;

//console.log(idade)

// 2 - mais sobre variaveis

// 3 - prompt
// Aparece uma para que possa digitar algo que o programador queira

// const age = prompt("Digite sua idade:")

//console.log aparece a menssagem na tela do console onde apare o Script

// console.log(`Você tem ${age} anos.`)

//4 - alert
// Alert é utilizado para aparecer uma mensagem quando o usuario entra no site 
// Como vemos neste exemplo

// alert("Testando");

// const z = 10

// alert(`O número é ${z}`)

// 5 - Math
// Math é utilizado para operações matematicas
// max é utilizado para achar o maior numero
console.log(Math.max(10, 2, 3, 5))
// floor é utilizado para arredondar o numero para baixo
console.log(Math.floor(6.144))
// ceil é utilizado para arredondar o numero para cima
console.log(Math.ceil(6.144))

// 6 - console

console.log("teste!")

console.error("erro!")

console.warn("aviso!")

// 7 - if

const m = 10;

if (m > 5) {
    console.log("M é maior que 5");
}

const user = "gustavo";

if (user === "gustavo") {
    console.log(`Seu nome é ${user}`)
}

// 8 - while

let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let x = 10;

// while(x > 5){
//     console.log(`Repetindo ${x}`)
// }

// 9 - do while

let o = 10

do {
    console.log(`Valor de O: ${o}`)
    o--
} while (o > 1);

// 10 - for

for (let t = 0; t < 10; t++) {
    console.log("Repetindo JS...");
}

let r = 10;

for (r; r > 0; r--) {
    console.log(`O r está diminuindo: ${r}`);
}

// 11 - identação

for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0) {
            console.log("deu 0")
        }
    }
}

// 12 - continue 

for(let s = 0; s < 10; s ++){
    //operador resto = %
    if(s % 2 === 0){
        console.log(`Numero par ${s}`)
        continue
    }
    console.log(s)
}

// 13 - switch

const job = "asd"

switch(job){
    case "Programador":
        console.log("Você é programador");
        break
    case "Advogado":
        console.log("Você é advogado");
        break
    case "Medioco":
        console.log("Você é Médico");
        break
    default:
        console.log("Profissão não encontrada");  
}

// switch "errado"

const l = 100

switch(l){
    case 200:
        console.log("L é 200");
    case 100:
        console.log("L é 100");
    case 10:
        console.log("L é 10");
    default:
        console.log("Valor de L não encontrado");
}