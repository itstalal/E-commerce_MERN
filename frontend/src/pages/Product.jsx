import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Brudcrums from '../components/Brudcrums/Brudcrums';
import './CSS/Product.css';
import DisplayProduct from '../components/DisplayProduct/DisplayProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext); // get products du contexte
  const { productId } = useParams(); // get Id du produit from l'URL
  const product = all_product?.find((e) => e.id === Number(productId)); // recherche du produit

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Brudcrums product={product} />
      <DisplayProduct product = {product} />
     
    </div>
  );
};

export default Product;
