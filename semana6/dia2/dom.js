//dentro de js existe este atributo que me ayuda a manipular elemtnos de todo mi proyecto

//selctores de js para manjearlos

// selectores  getElementsbyTagName(input)
//getElementsbyClassName(nombre)
//getEleementByid(id)

// querySelector(#nombre)

const inputs = document.getElementsByTagName("input");

console.log(inputs);

//para poder convertir un htmlcollection a un arrat nomras utilizar el metodp Array.from

const newInputs = Array.from(inputs);
console.log("inputs", inputs);
console.log("nuevos", newInputs);

newInputs.map((newInput) => {
  console.log("datos", newInput);
});

const inputEmail = document.getElementById("inputMail");
inputEmail.style.backgroundColor = "#ccc";
console.log(inputEmail.value);
