import { useEffect, useState } from "react";

const URL = "https://fakestoreapi.com";

export default function Productos() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(`${URL}/products?limit=5`);
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" width={40} height={40} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
}
