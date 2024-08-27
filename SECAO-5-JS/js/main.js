// 1 - arrays

// const lista = [1,2,3,4,5]

// console.log(lista)

// console.log(typeof lista)

// const itens = ["Matheus", true, 2, 4.12,[]];

// console.log(itens)

// // 2 - mais sobre arrays

// const arr = [1,5,8,4,2]

// console.log(arr[3])

// // 3 - propriedades

// const numbers = [5,3,4]

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "gustavo"

// console.log(myName.length)

// // 4 - métodos

// const otherNumbers = [1,2,3]

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto"

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// // 5 - objetos

// const person = {
//     name : "gustavo",
//     age : 31,
//     jop : "Programador"
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// 6 - criando e deletando propriedades

// const car = {
//     engine : 2.0,
//     brand : "VW",
//     model : "Tiguan",
//     km : 10000
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.km;

// console.log(car)

// // 7 - mais sobre objetos

// const obj = {
//     a : "teste",
//     b : true
// }

// console.log(obj instanceof Object);

// const obj2 = {
//     c:[]
// }

// Object.assign(obj2, obj);
// console.log(obj2);

// // 8 - conhecendo melhor os objetos 

// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))

// // 9 - Mutação

// const a = {
//     name : "Gustavo",
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 18;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// 10 - loop em array
// const users = ["Matheus", "João", "Kauan", "Miguel"]

// for(let i = 0; i < users.length; i++){
//     console.log(`Listando o Usuário: ${users[i]}`);
// }

// // 11 - push e pop

// const array = ["a", "b", "c"]

// // adiciona no final da lista
// array.push("d")

// console.log(array);

// console.log(array.length);

// // remove no final da lista
// array.pop();

// console.log(array)

// const itemRemovido = array.pop();

// console.log(itemRemovido);

// console.log(array);

// // pode adicionar varios elementos
// array.push("o", "p", "q");

// console.log(array);

// // 12 - shift e unshift

// const letters = ["k", "j", "m", "n"]

// const letter = letters.shift();

// console.log(letter);

// console.log(letters);

// letters.unshift("p", "q");

// letters.unshift("r");

// console.log(letters);

// // 12 + 1 - indexOf e lastIndexOf

// const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"]

// console.log(myElements.indexOf("Maça"));

// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);

// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements[myElements.indexOf("Banana")]);

// // 14 - slice

// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2,4)

// console.log(subArray);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2,4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10,20);

// console.log(subArray3);

// const subArray4 = testeSlice.slice(1,4 + 1);

// console.log(subArray4);

// // 15 - forEach

// const num = [1,2,3,4,5];

// num.forEach((numero) =>{
//     console.log(`O número é ${numero}`);
// })

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JavaScript"},
//     {title: "Terceiro post", category: "Python"},
// ];

// posts.forEach((post) =>{
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// })

// // 16 - includes

// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));

// console.log(brands.includes("KIA"));

// if(brands.includes("BMW")){
//     console.log("Há carros da marca BMW");
// }

// // 17 - reverse

// const reverseTest = [1,2,3,4,5]

// reverseTest.reverse();
// console.log(reverseTest);

// 18 - trim

// const trimTest = "      testando \n      ";

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// // 19 - padstart

// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4,"0")

// console.log(testePadStart);

// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0")

// console.log(newNumber);

// console.log(testePadEnd);

// // 20 - split

// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayFrase = frase.split(" ")

// console.log(frase);

// console.log(arrayFrase);

// // 21 - join 
// const fraseDeNovo = arrayFrase.join(" ")

// console.log(fraseDeNovo);

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

// console.log(fraseDeCompra);

// // 22 - repeat

// const palavra = "Testando "

// console.log(palavra.repeat(5));

// // 23 - rest operator

// const somaInfinita = (...args) => {
//     let total = 0

//     for(let i = 0; i < args.length; i ++){
//         total += args[i]
//     }

//     return total;
// };

// console.log(somaInfinita(1,2,3));

// console.log(somaInfinita(1,20,34,3424,128812, 12723, 12, 23, 54, 12,));

// 24 - for of

// const somaInfinita2 = (...args) => {
//     let total = 0

//     for (num of args) {
//         total += num
//     }

//     return total;
// };

// console.log(somaInfinita2(1, 5, 7, 4, 2, 3, 6));


// // 25 - destructuring em objetos 
// const userDetails = {
//     firstName: "Gustavo",
//     lastName: "Souza",
//     job: "Programador"
// }

// const { firstName, lastName, job } = userDetails;

// console.log(firstName, lastName, job);

// // renomear variaveis

// const { firstName: primeiroNome, lastName: ultimoNome } = userDetails;

// console.log(firstName);
// console.log(primeiroNome);

// console.log(ultimoNome);

// // 26 - Destructuring em arrays
// const myList = ["Avião", "Submarino", "Carro", "Trator"]

// const [veiculoA, veiculoB, veiculoC, veiculoD] = myList;

// console.log(veiculoA, veiculoB, veiculoC, veiculoD);

// // 27 - JSON

// const myJson = '{"name" : "Gustavo", "age" : 18, "skills" : ["PHP", "Java", "Python"]}';

// console.log(myJson);

// console.log(typeof myJson);

// // 28 - Json para objeto e objeto para Json

// const myObject = JSON.parse(myJson);

// console.log(myObject);

// console.log(myObject.name);

// console.log(typeof myObject);

// //json invalido 

// const badJson = '{"name" : Gustavo, "age" : 18}';

// //const myBadJson = JSON.parse(badJson);

// // add no JSON

// myObject.isOpenToWork = true;

// console.log(myObject);

// // Objeto para JSON

// const myNewJson = JSON.stringify(myObject)

// console.log(myNewJson);

// console.log(typeof myNewJson);

