import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/shop" style={styles.link}>
            Shop
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/blog" style={styles.link}>
            Blog
          </Link>
        </li>
      </ul>
      <div className="wishcart" style={styles.wishStyle}>
        <Link to="/cart" style={styles.link}>
          <FaShoppingCart style={{ margin: "5px" }} />
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1e1e1e",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
    // top: 0,
    // zIndex: 1000,
  },

  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
  wishStyle: {
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "0",
    color: "white"
  },
  cartTotal: {
    margin: "0 20px",
    padding: "0 10px",
    justifyContent: "space-between",
    display: "flex"
  }
};

export default Navbar;
