import React from "react";
import arrow_icon from "../assets/Frontend_Assets/breadcrum_arrow.png"; 
import './Brudcrums.css';

const Breadcrumbs = ({ product }) => {
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="" /> SHOP{" "}
      <img src={arrow_icon} alt="" /> {product?.category}{" "}
      <img src={arrow_icon} alt="" /> {product?.name}
    </div>
  );
};

export default Breadcrumbs;
