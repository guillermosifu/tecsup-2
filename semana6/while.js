//while sirve para hecr algo determinadas veces

//la estructura de while siempre va de la mano ocn un contandor

let contador = 0;

while (contador <= 5) {
  console.log("contador", contador);

  contador++;
}

//1 escribir un programa que pida al usuaio una palabra y la mustre por panatalla 10 veces

const imprimirDiezVeces = (palabra) => {
  let contador = 0;
  while (contador < 10) {
    console.log(palabra);
    contador++;
  }
};

imprimirDiezVeces("hola");

// escribe una funcion  que muetsre en consola la tabla de multiplicar del 1 al 10
