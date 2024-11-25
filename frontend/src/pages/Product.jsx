import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Brudcrums from '../components/Brudcrums/Brudcrums';
import './CSS/Product.css';
import DisplayProduct from '../components/DisplayProduct/DisplayProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext); 
  const { productId } = useParams(); 
  const product = all_product?.find((e) => e.id === Number(productId)); 

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Brudcrums product= {product} />
      <DisplayProduct product= {product} />
     
    </div>
  );
};

export default Product;
