import React from 'react'
import './DisplayProduct.css'


const DisplayProduct = (props) => {
    const {product} = props;
  return (
    <div>
         <div className="product-details">
        <h1>{product.name}</h1>
        <p>Category: {product.category}</p>
        <p>Price: ${product.new_price}</p>
        <button>Ajouter au Panier</button>
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  )
}

export default DisplayProduct