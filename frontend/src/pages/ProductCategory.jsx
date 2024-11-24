import React, { useContext } from "react";
import "./CSS/ProductCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/Item";

const ProductCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="popular">
      {props.banner}

      {/* Titre et description */}
      <h2 className="popular-title">Explore our {props.category} collection</h2>
      <p className="popular-description">
        Discover the latest and most popular items curated just for you.
      </p>

      {/* Dropdown pour le triage */}
      <div className="sort-dropdown">
        <label htmlFor="designer">Sort by price:</label>
        <select id="designer">
          <option value="">All prices</option>
          <option value="designer1">Low to High</option>
          <option value="designer2">High to Low</option>
        </select>
      </div>

      {/* Liste des produits */}
      <div className="popular-item">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
