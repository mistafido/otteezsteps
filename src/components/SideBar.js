import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: "block",
    width: "16%",
    height: "70%",
    backgroundColor: "turquoise",
    color: "black",
    justifyContent: "center",
    padding: "5px 0",
    position: "absolute",
  },
  logoContainer: {
    margin: "25px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  categoriesHeader: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "lightGreen",
    margin: "0",
  },
  categoryList: {
    display: "block",
    listStyle: "none",
  },
  categoryListItem: {
    cursor: "pointer",
    marginTop: "20px",
    padding: "5px",
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "1rem",
  },
};
const SideBar = () => {
  return (
    <div className="container" style={styles.container}>
      <div className="logoContainer" style={styles.logoContainer}>
        <p className="logo" style={styles.logo}>
          OtteezSteps
        </p>
      </div>

      <div className="categoriesHeader" style={styles.categoriesHeader}>
        <img className="buttonImage" src="" alt="" />
        All Categories
      </div>

      <div className="categoryListContainer">
        <ul className="categoryList" style={styles.categoryList}>
          <li className="categoryListItem" style={styles.categoryListItem}>
            <Link to="/shop" style={styles.link}>
              Sneakers
            </Link>
          </li>
          <li className="categoryListItem" style={styles.categoryListItem}>
            <Link to="/shop" style={styles.link}>
              Slides
            </Link>
          </li>
          <li className="categoryListItem" style={styles.categoryListItem}>
            <Link to="/shop" style={styles.link}>
              Loafers
            </Link>
          </li>
          <li className="categoryListItem" style={styles.categoryListItem}>
            <Link to="/shop" style={styles.link}>
              Boots
            </Link>
          </li>
          <li className="categoryListItem" style={styles.categoryListItem}>
            <Link to="/shop" style={styles.link}>
              Formal Shoes
            </Link>
          </li>
          <li className="categoryListItem" style={styles.categoryListItem}>
            <Link to="/shop" style={styles.link}>
              Flats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar