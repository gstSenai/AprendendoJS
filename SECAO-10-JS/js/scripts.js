// 1 - adicionando eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("clicou aqui")
})

// 2 - Removendo Evento

const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento Removido");
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});




// 6 - eventos de tecla
document.addEventListener("keyup",(e) =>{
    console.log(`soltou a tecla ${e.key}`);
})

document.addEventListener("keydown",(e) =>{
    console.log(`Segurou a tecla ${e.key}`);
})

// 7 - eventos de mouse 
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () =>{
    console.log("Pressionou o Botão");
})

mouseEvents.addEventListener("mouseup", () =>{
    console.log("Soltou o Botão");
})

mouseEvents.addEventListener("dblclick", () =>{
    console.log("Double Click no Botão");
})

// 8 - movimento do mouse
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x}`);
//     console.log(`No eixo Y: ${e.y}`);
// })

// 9 - evento de scroll

window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
         console.log("Passamos de 200px");
    }
})

// 10 - evento de focus/blur

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no Input");
})

input.addEventListener("blur", (e) => {
    console.log("Saiu no Input");
})

// 11 - evento de carregamento
window.addEventListener("load", () => {
    console.log("A pagina carregou!");
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "sla";
})

// 12 - debunce
const debounce = (f, delay) => {
    let timeout;
    return (...arguments) => {
        if(timeout) {
            clearInterval(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        },delay)
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms");
},400))