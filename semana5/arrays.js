// cuandot datos hay en una vairbale
// manejamos una informacion
//array que tiene mas de una informacion
// compatible con todos los tipos de datos

let alumnos = ["guillermo", "raul", "julia", "noe"];
console.log(alumnos);
console.log(alumnos[2]);
console.log(alumnos[3]);

// puede tener varios tipos de datos

let varioTipos = [true, "laptop", 1800, "pc", 1250.5];

//accedemos por su si indice

console.log(varioTipos[2]);

//se podra alterar el dato de un array

varioTipos[3] = false;
console.log(varioTipos);

//podemos crea un elemento

alumnos[4] = "saul";
alumnos[10] = "antony";

// quiero saber cuantos elementos tiene mi array

console.log("cantidad de elementos ", alumnos.length);


