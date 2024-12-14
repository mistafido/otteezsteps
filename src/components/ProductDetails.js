import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer"
import { FaShoppingCart } from "react-icons/fa";
import ProductRating from "./ProductRating";

const styles = {
  container: {
    display: "flex",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "turquoise",
    color: "black",
    borderRadius: "8px",
    width: "74%",
    height: "100%",
    marginLeft: "20%",
    marginRight: "5%",
    marginTop: "3%",
    marginBottom: "5%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    justifyContent: "space-between",
  },
  productImageContainer: {
    display: "column",
    width: "45%",
    padding: "3% 5%",
  },
  mainImage: {
    width: "100%",
    borderRadius: "10px",
  },
  imageGroup: {
    margin: "2% 1%",
  },
  imageGroupImage: {
    margin: "2% 1%",
    width: "100px",
    borderRadius: "10px",
  },
  productDetails: {
    width: "45%",
    margin: "5% 0",
    padding: "0",
  },
  productName: {
    fontWeight: "100",
  },
  productCategory: {
    fontWeight: "100",
  },
  customizationGroup: {
    display: "flex",
  },
  iconGroup: {
    margin: "0 10px",
  },
  sizeGroup: {
    display: "flex",
  },
  sizeItem: {
    padding: "1%",
    margin: "1%",
    border: "1px solid black",
    cursor: "pointer",
  },
  productPrice: {
    fontSize: "26px",
    fontWeight: "100",
  },
  button: {
    padding: "10px 10px",
    margin: "10px 10px",
    width: "30%",
    backgroundColor: "green",
    textDecoration: "none",
    color: "white",
    border: "1px solid green",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "100",
  },
  detailsLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "100",
    backgroundColor: "grey",
    padding: "10px 10px",
    margin: "10px 10px",
    borderRadius: "10px",
  },
};
const ProductDetails = (props) => {
  const navigate = useNavigate();
    const {addToCart} = props
    const location = useLocation();
//    const { id } = useParams();
    const product = location.state?.product;

    if (!product) {
      return <div>Product not found or no data available!</div>;
    }
     const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };
  const handleBuy = () => {
    addToCart(product);
    navigate('/cart')
  }
  
  return (
    <div className="container">
      <Navbar />
      <SideBar />
      <div className="productDetailsContainer" style={styles.container}>
        <div
          className="productImageContainer"
          style={styles.productImageContainer}
        >
          <img src={product.img} alt={product.name} style={styles.mainImage} />
          <div className="imageGroup" style={styles.imageGroup}>
            <img
              src={product.img}
              alt={product.name}
              style={styles.imageGroupImage}
            />
          </div>
        </div>
        <div className="productDetails" style={styles.productDetails}>
          <h1 style={styles.productName}>{product.name}</h1>
          <h3 style={styles.productCategory}>Category of the product</h3>
          <ProductRating rating={product.rating} />
          <p>{product.desc}</p>
          <div className="customizationGroup" style={styles.customizationGroup}>
            <div className="iconGroup">
              <FaShoppingCart
                onClick={handleAddToCart}
                style={{
                  fontSize: "24px",
                  color: "black",
                  cursor: "pointer",
                  margin: "0 10px",
                }}
                title="Add to Cart"
              />
            </div>
          </div>
          <div className="sizeGroup" style={styles.sizeGroup}>
            <div style={styles.sizeItem}>7</div>
            <div style={styles.sizeItem}>8</div>
            <div style={styles.sizeItem}>9</div>
            <div style={styles.sizeItem}>10</div>
            <div style={styles.sizeItem}>11</div>
          </div>

          <h2 style={styles.productPrice}>NGN {product.price}</h2>
          <button type="submit" style={styles.button} onClick={handleBuy}>
            Buy
          </button>
          <Link
            to='/shop'
            style={styles.detailsLink}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails