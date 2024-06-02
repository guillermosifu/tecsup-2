let h2 = document.querySelector("h2");
let button = document.getElementById("colorChange");
let button3 = document.getElementById("button3");
let buttonAddText = document.getElementById("addText")
let buttonRemoveText = document.getElementById("removeText")
let buttonReplaceText = document.getElementById("replaceText")
let buttonCloneText = document.getElementById("cloneText")
let buttonInsertText = document.getElementById("insertText")

button.addEventListener("click", function () {
  h2.style.color = "red";
  console.log(window.getComputedStyle(h2));
});

button3.addEventListener("click", function () {
    button3.classList.toggle("buttonChanged")
});

let container = document.getElementById("container")
let div = document.createElement("div")
div.innerHTML = "<h1>Hola mundo del software</h1>"
let h3 = document.createElement("h3")
h3.textContent = "Elemento reemplazado"


buttonAddText.addEventListener("click", function () {
    container.appendChild(div)
})

buttonRemoveText.addEventListener("click", function () {
    container.removeChild(div)
})

buttonReplaceText.addEventListener("click", function() {
    container.replaceChild(h3, div)
})

buttonCloneText.addEventListener("click", function () {
    let newNode = h2.cloneNode(true)

    container.appendChild(newNode)
})

buttonInsertText.addEventListener("click", function() {
    let h1 = document.createElement("h1")
    h1.innerHTML = "Hola mundo"

    container.insertBefore(h1, h2)
})
