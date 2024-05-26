// forEach tambnien es un bucle
//es una mezacla ente el for y el map
//irve para iterrar un arreglo

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero, index) => {
  return numero * 2;
});


const productos=[
    {
        name:"laptop",
        price:1500
    },{
        name:"celular",
        price: 2000
    }
]


productos.forEach((producto)=>{

    console.log(producto.name)
})