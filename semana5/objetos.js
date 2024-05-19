// objeto dentro js se define  key (propieda) value (valor)

// carro deporit
// marca  gt
// catidad 2
//color rojo
//motor
//cilndraje


const carro ={
    color: "azul",
    motor:2.0,
    anio:2024,
    modelo: "gtr",
    nuevo: true,
    cilindraje: 1600
}

const moto={
    color: "azul",
    motor:2.0,
    anio:2024,
    modelo: "gtr",
    nuevo: true,
    cilindraje: 16
}

console.log(carro)
console.table(carro)


//objeto persona

const persona ={
    edad: 30,
    nombre: "juan",
    sexo: "MAsculino",
    altura: 1.80,
    mayorDeEdad: true,
    tatuajes: true,
    nacionalidad: "peruano"
}

//como podemo acceder a uno de los valores?
console.log(persona)
console.log(persona.nombre)
console.log(persona.nacionalidad)

// se podra crear un nuevo elemento?

persona.celular = 999999999
persona.colorDeOjos= "azules"

//como reemplazar un dato en un elemento

persona.nombre = "guillermo"


// un array de objetos 


const vehiculos =[
    {
        motor: 2.0,
        marca: "lifan",
        color:"azul",
        modelo:"deportivo",
        precio: 10000
    },
    {
        motor: 1.0,
        marca: "nissan",
        color:"rojo",
        modelo:"deportivo",
        precio: 20000
    }
]


console.log(vehiculos)
console.log(vehiculos[0].marca)
console.log(vehiculos[1].marca)
