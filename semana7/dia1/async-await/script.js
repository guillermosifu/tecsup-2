const URLAPI = "https://randomuser.me/api/?results=5"
let buttonAddStorage = document.getElementById("addStorage")
let buttonRemoveStorage = document.getElementById("removeStorage")
let containerStorage = document.getElementById("containerStorage")
let container = document.getElementById("container")
const textError = document.createElement("p")
textError.innerHTML = "Los usuarios no se han cargado correctamente."

async function getUsers () {
    try {
        const response = await fetch(URLAPI)
        const data = await response.json()
        
        generateUsersInPage(data.results)
        
    } catch (error) {
        container.appendChild(textError)
    }
}

function generateUsersInPage ( users ) {
    users.forEach(element => {
        const user = document.createElement("div")

        user.innerHTML = `
            <p>${element.name.first}</p>
        `
        container.appendChild(user)
    })
}

buttonAddStorage.addEventListener("click", function () {
    localStorage.setItem("password", "contraseña123")
    containerStorage.innerText = "contraseña123"
})

buttonRemoveStorage.addEventListener("click", function () {
    localStorage.removeItem("password")

    containerStorage.innerText = ""
})

const getStorage = localStorage.getItem("password")

containerStorage.innerText = getStorage

getUsers()