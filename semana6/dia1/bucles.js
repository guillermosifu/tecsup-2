//bucles es un estructura repetitiva . se hace muchas veces

//normalmente un bucle esta diseñado para un array
// leer cada elemenrto de la lista muchas veces a la vez
// uno de los bucles mas usados y iniciales  for
//for = todo

// sintaxis   iterador

// i++
// i = i + 1
// indica wue se hara de 1 en uno

for (let i = 0; i < 10; i++) {
  console.log("iterador", i);
}

// van crea un array de alumnos
//iteras y obtener la cantidad de alumnos que tienes el array

const alumnos = ["pepe", "mario", "luigi", "tony", "laura"];

for (let i = 0; i < alumnos.length; i++) {
  console.log("los alumnos son :", alumnos[i]);
}

// crear un array numero de 10 elementos y recorramos para encontramos los numeros pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let j = 0; j < numeros.length; j++) {
  //cpmo hacemos para imprimir en consolo los pares
  if (numeros[j] % 2 === 0) {
    console.log(numeros[j]);
  }
}
