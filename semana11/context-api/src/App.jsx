import { useEffect, useState } from 'react'
import Product from './components/Product'
import './App.css'

const URL = "https://fakestoreapi.com"

function App() {
  const [products, setProducts] = useState([])
  const [showProducts, setShowProducts] = useState(false)

  const getProducts = async () => {
    const response = await fetch(`${URL}/products?limit=5`)
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(showProducts)

  // string -> true
  // bool -> true
  // number -> true excepto 0
  // array -> true
  // object -> true
  // undefined -> false
  // NaN -> false
  // Null -> false

  return (
    <>
      <button onClick={() => setShowProducts(!showProducts)}>
       Mostrar productos
      </button>
      {showProducts ? (
        products && products.length > 0 && products.map(product => (
          <Product key={product.id} data={product} />
        ))
      ) : (
        <p>Productos ocultos</p>
      )}
    </>
  )
}

export default App
