import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ProductCategory from "./pages/ProductCategory";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import banner_men from './components/assets/Frontend_Assets/banner_mens.png';
import banner_women from './components/assets/Frontend_Assets/banner_women.png';
import banner_kids from './components/assets/Frontend_Assets/banner_kids.png';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ProductCategory banner={banner_men} category='men' />} />
          <Route path="/womens" element={<ProductCategory banner={banner_women} category='women' />} />
          <Route path="/kids" element={<ProductCategory banner={banner_kids} category='kid' />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
