import React from "react";
import "./DisplayProduct.css";

const DisplayProduct = (props) => {
  const { product } = props;
  return (
    <div className="container">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <p>Price: ${product.new_price}</p>
          <label for="size">Choose your size:</label>
          <select id="size">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="xxxl">XXXL</option>
          </select>
          <button>Ajouter au Panier</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
