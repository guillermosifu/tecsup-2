// existe difernetes tipos de bucles
//map  sintaxis es declarr el nombre

// const productos = [
//   {
//     name: "laptop",
//     price: 1800,
//   },
//   {
//     name: "celular",
//     price: 800,
//   },
//   {
//     name: "monitor",
//     price: 1500,
//   },
// ];

// productos.map((producto, index) => {
//   console.log("indice", index);
//   console.log("producto", producto.name);
// });

//array de objetos instituciones

const places = [
  {
    nombre: "tecsup",
    locacion: "arequipa",
  },
  {
    nombre: "curser",
    locacion: "lima",
  },
  {
    nombre: "udemy",
    locacion: "mexico",
  },
];

places.map((place, index) => {
  console.log(index);
  console.log(place.locacion);
});

// creamos un array numerico y al ejecutarlo que cada resultado este multiplaco por 2
const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// comol haeiamos un bucle con una fucion para obetenr el precio duplicado

const productos = [
  {
    name: "laptop",
    price: 1800,
  },
  {
    name: "celular",
    price: 800,
  },
  {
    name: "monitor",
    price: 1500,
  },
];

// retp duplicar su precio

const preciosFriday = productos.map((producto) => {
  return {
    name: producto.name,
    price: producto.price * 2,
  };
});

console.log("preciosfriday", preciosFriday);
