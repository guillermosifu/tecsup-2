const loginForm = document.getElementById("loginForm")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const userData = {
        email: emailInput.value,
        password: passwordInput.value,
    }

    localStorage.setItem("email", emailInput.value)
    localStorage.setItem("password", passwordInput.value)
    localStorage.setItem("user", JSON.stringify(userData))
    const dataLocal = localStorage.getItem("user")
    
    console.log(dataLocal.email)
    console.log(JSON.parse(dataLocal).email)
    console.log(passwordInput.value)
})