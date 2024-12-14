import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList"


const styles = {
  container: {
    display: "block",
    backgroundColor: "grey"
  },
};
const Shop = () => {
  return (
    <div className="container" style={styles.container}>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Shop;
