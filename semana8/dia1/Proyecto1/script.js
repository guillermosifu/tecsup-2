// Menú Hamburguesa 
const menuButton = document.getElementById('menu_hamburguer')
const menuList = document.getElementById('menu')

menuButton.addEventListener('click', function () {
    menuList.classList.toggle('active')
})

// Lista de productos

const productsList = document.getElementById('products_list')

async function getProducts () {
    const response = await fetch("https://fakestoreapi.com/products?limit=5")
    const data = await response.json()
    console.log(response)
    console.log(data)
    generateCardProducts(data)
}

function generateCardProducts (data) {
    data.forEach(product => {
        const productCard = document.createElement('div')
        productCard.classList.add("product_card")


        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h1>${product.title}</h1>
            <span>
                <p>S/.${product.price}</p>
                <p>${product.rating.rate}</p>
            </span>
        `

        productsList.appendChild(productCard)
    })
}

getProducts()