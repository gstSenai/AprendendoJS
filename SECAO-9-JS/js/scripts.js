// 1 - movendo pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando por id

const selectID = document.getElementById("title");

console.log(selectID);

// 4 - selecionando por classe

const selectClass = document.getElementsByClassName("product");

console.log(selectClass);

// 5 - selecionando os elementos por css

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore

const p = document.createElement("p");

const header = selectID.parentElement

console.log(header);

header.insertBefore(p, selectID)

// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replaceChild
const h5 = document.createElement("h5");

h5.textContent = "Meu Novo Titulo!";

header.replaceChild(h5, selectID);

// 9 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);
