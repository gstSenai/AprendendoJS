// 1 - métodos

// const pessoaMetodos = {
//     name : "Gustavo",
//     age : function(){
//         console.log(19);
//     }
// }

// console.log(pessoaMetodos.name);

// pessoaMetodos.age();

// 2 - aprofundando metodos

// const pessoa = {
//     nome : "Gustavo",

//     getNome:function() {
//         return this.nome;
//     },

//     setNome: function(novoNome) {
//         this.nome = novoNome;
//     },
// };

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Joaquim")

// console.log(pessoa.getNome());

// // 3 - prototype
// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(Object.getPrototypeOf(arr));

// // 4 - mais sobre prototype

// const myObject = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classe basicas

// const cachorro = {
//     raca: null,
//     patas: 4
// };

// const pastorAlemao = Object.create(cachorro)

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro)

// bulldog.raca = "Bulldog";

// 6 - função como classe - função construtora

// function criarCachorro(nome,raca){
//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const bob = criarCachorro("Bob","Vira Lata");

// console.log(bob);

// 7 - funções como classe

function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky);

// 8 - metodos na funcao construtora
Cachorro.prototype.uivar = function(){
    console.log("auuuuuuu");
}

console.log(Cachorro.prototype);

husky.uivar();

// 9 - classes es6(Melhor Jeito para criar Objeto)

class CachorroClasse{
    constructor(nome,raca){
        this.nome = nome,
        this.raca = raca
    }
}

// const jeff = new CachorroClasse("Jeff", "Labrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// // 10 - mais sobre classes

// class Caminhao{
//     constructor(eixos,cor){
//         this.eixos = eixos,
//         this.cor = cor
//     }

//     descreverCaminhao(){
//         console.log(`Este caminhao tem ${this.eixos} e é da cor ${this.cor}`);
//     }
// }

// const scania = new Caminhao(6, "Vermelho");

// console.log(scania);

// scania.descreverCaminhao();

// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Branca")

// console.log(c3.motor);

// // 11 - Override

// class Humano{
//     constructor(nome,idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const h1 = new Humano("gst", 32)

// console.log(h1);

// Humano.prototype.idade = "Não Definida";

// console.log(h1.idade);

// console.log(Humano.prototype.idade);

// 12 Symbol 

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()

Aviao.prototype[asas] = 2

const boeing = new Aviao("Boeing", 10)

console.log(boeing);

console.log(boeing[asas]);

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTag(tags){
        const tagsArray = tags.split(", ");
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum, Post", "É um post sobre programação");

console.log(myPost.exibirTitulo);

myPost.adicionarTag = "programação, javascripts, js"

console.log(myPost);

// 14 - Herança

class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4,"gst");

console.log(shark);

// 15 - instanceoff

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste")instanceof Mamifero);

console.log(new Post("a", "b")instanceof Lobo);