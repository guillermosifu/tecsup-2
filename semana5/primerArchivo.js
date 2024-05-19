//tipos de datos
//variables

// const let var (no se uso mucho)
//const informacion constante diefinido pi = 3.1416
//let informacio varias = presidente

// debilmente tipado

let numero1 = 20;
let numero2 = 20;

let resultado = 0;

resultado = numero1 + numero2;

console.log(resultado);

//tipo de datos

// let numerico = 20;
// let string= "guillermo"
// let booleano = true
// let undefined;
// null = null

// consola erro o precaucion

// console.error(resultado)
// console.warn(resultado)

// alert("muchas cosas");

let alumno = "pepito";
let profesor = "raul";

// vamos hacer calculadora js
//prompt  una ventana emergenete que permite ingdresa datos
//se guarde en un avairbale

const valor1 = prompt("ingresa el valor 1");
const valor2 = prompt("ingresa el valor 2");

//necesito que el usuario ingresa valores ytmb que ongrese eltipo de operacion que quiere realizar

const operacion = prompt("escoje la operacion + - * /");

let resultadoCalculadora = 0;

//para poder hacer calciulos debo convertir mi string a number
//parseInt : convierte el string a number
// + : clocamos anteponiendo el valor o la vairable

if (operacion === "+") {
  resultadoCalculadora = +valor1 + +valor2;
  console.log("resultado suma:", resultadoCalculadora);
} else if (operacion === "-") {
  resultadoCalculadora = +valor1 - +valor2;
  console.log("resultado resta:", resultadoCalculadora);
} else if (operacion === "*") {
  resultadoCalculadora = +valor1 * +valor2;
  console.log("la multiplicaion es", resultadoCalculadora);
}else if(operacion ==="/"){
    if(+valor2 !== 0){
        resultadoCalculadora = +valor1 / +valor2;
    console.log("La division fue",resultadoCalculadora)
    }else{
        console.warn("el divisor debe ser disitinto  0")
    }
}else{
    console.error("operacion no valida")
}
