//un funcion es un conjunto de soluciones para poder hacer tareas

function nombreDeLaFuncion() {
  //funcion declarativa

  console.log("hola soy un funcion");
}

//como encutamo una funcion invocaNDOLA

nombreDeLaFuncion();

//como funciona la funcion

// function sumar(numero1, numero2) {
//   const suma = numero1 + numero2;
//   console.log(suma);
//   return;
// }

// sumar(100, 20);

// tipos de funciones

//declarativo

function nombre() {
  return;
}

// expresion o anonima

const resta = function (a, b) {
  return a - b;
};

//arrow function

const multiplicacion = (a, b) => {
  return a * b;
};

//Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.

//definamos uns funcion
//los argumanetos o parametros son los quye almacenar los datos deuna variable
// function sumar(a, b) {
//   let resultado = a + b;
//   console.log("la suma es ", resultado);
// }

// sumar(100, 50);

const sumatoria = (a, b) => {
  let resultado = a + b;
  console.log("la suma es ", resultado);
};

sumatoria(20, 40);

//Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos
//

const promedio = (a, b, c, d) => {
  let resultado = (a + b + c + d) / 4;
  console.log("el promedio es ", resultado);
};

promedio(14, 11, 16, 14);

//Calcular el área de un rectángulo

function areaRectangulo(base, altura) {
  let area = base * altura;

  console.log("el area es", area);
}

areaRectangulo(5, 8);
