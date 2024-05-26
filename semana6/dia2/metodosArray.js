// los metodos nos nayuda a deifnir diferntes procesos

// metodos push()  agrega un nuevo elemento a un array

let frutas = ["piña", "guanabana"];

// frutas[2]="naranja"
frutas.push("fresa", "orange");

console.log(frutas);

// pop()= elimina el ultimo elemento de un array

let fruits = ["piña", "guanabana"];
fruits.pop();

console.log(fruits);

//shift()= elimina pero el primer elemento de un array

let frutita = ["piña", "guanabana", "fresa"];
frutita.shift();
console.log(frutita);

//unshift()= agrega un elememto al inicio del array y devuelva la nueva lista

let frutotas = ["banana", "pera", "granadilla"];
frutotas.unshift("manzana");

console.log(frutotas);


//splice()= camnba el conteniddo de u array eliminar elementos / reemplazar


let verduras=["zanahoria","tomate","cebolla"]

verduras.splice(1,2,"naranja","apio")

console.log(verduras)

//slice()= crea una copia del array que existe 

let frutitas =["fresa","banana","piña","naranja","aguaymanto"]

let citricos = frutitas.slice(1,4)

console.log(citricos)
console.log(frutitas)