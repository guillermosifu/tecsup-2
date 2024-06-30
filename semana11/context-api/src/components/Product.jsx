import "./Product.css"

function Product ({ data }) {
    return (
        <div className="card">
            <picture className="image-product__content">
                <img src={data.image} alt="" />
            </picture>
            <p className="product-title">
                {data.title}
            </p>
            <ul className="product-list">
                <li>{data.price}</li>
                <li>{data.category}</li>
            </ul>
        </div>
    )
}

export default Product