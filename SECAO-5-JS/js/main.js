// 1 - arrays

// const lista = [1,2,3,4,5]

// console.log(lista)

// console.log(typeof(lista))

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
const users = ["Matheus", "João", "Kauan", "Miguel"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o Usuário: ${users[i]}`);
}

// 11 - push e pop

const array = ["a", "b", "c"]

// adiciona no final da lista
array.push("d")

console.log(array);

console.log(array.length);

// remove no final da lista
array.pop();

console.log(array)

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

// pode adicionar varios elementos
array.push("o", "p", "q");

console.log(array);

// 12 - shift e unshift

const letters = ["k", "j", "m", "n"]

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q");

letters.unshift("r");

console.log(letters);

// 12 + 1 - indexOf e lastIndexOf

const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maça"));

console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);

console.log(myElements[myElements.indexOf("Abacate")]);

