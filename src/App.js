import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./pages/Login"
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Blog from "./pages/Blog";
import Register from "./pages/Register";


const App = () => {
  const [cart, setCart] = useState([]);
  

  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  return (
    <Router>
      <div style={styles.app}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  app: {
    backgroundColor: "#121212",
    color: "#ffffff",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;
