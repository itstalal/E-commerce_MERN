import React, { useContext } from "react";
import "./CSS/ProductCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/Item";

const ProductCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-Category">
      {props.banner};
      <div className="shop-Category-Container">
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
