import React from "react";
import arrow_icon from "../assets/Frontend_Assets/breadcrum_arrow.png";
import "./Brudcrums.css";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ product }) => {
  return (
    <div className="breadcrumb">
      <Link to="/">HOME</Link> <img src={arrow_icon} alt="" />
     <Link to=''>SHOP</Link>  <img src={arrow_icon} alt="" />
      <Link to=''>{product?.category} </Link> <img src={arrow_icon} alt="" />
     <Link to={`/product/${product?.id}`}> {product?.name} </Link>
    </div>
  );
};

export default Breadcrumbs;
