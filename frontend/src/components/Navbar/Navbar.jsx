import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import footer_logo from '../assets/Frontend_Assets/logonew.webp'



const Navbar = () => {
  return (
    <header>
      <nav className="Navbar">
       <img width={'60px'} src={footer_logo} alt="" />
        
        <ul className={`List`}>
            <li><Link to="/" style={{textDecoration: 'none', fontSize:'20px', color:'black'}}>Home</Link></li>
            <li><Link to="/products" style={{textDecoration: 'none', fontSize:'20px', color:'black'}}>products</Link></li>
            <li><Link to="/mens" style={{textDecoration: 'none', fontSize:'20px', color:'black'}}>Mens</Link></li>
            <li><Link to="/womens" style={{textDecoration: 'none', fontSize:'20px', color:'black'}}>Womens</Link></li>
            <li><Link to="/kids" style={{textDecoration: 'none', fontSize:'20px', color:'black'}}>Kids</Link></li>
        </ul>
        <div className="Login-Cart">
            <Link to="/cart"><button className="fs-2" style={{border: "none"}}><i className="bi bi-cart4"></i></button></Link>
            <Link to="/login"><button>Login</button></Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
