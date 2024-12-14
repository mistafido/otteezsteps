import React from 'react';
import { Link } from 'react-router-dom'
// import ProductList from './ProductList'

const styles = {
  container: {
    marginTop: "35%",
    padding: "20px",
    textAlign: "center",
    color: "white",
    position: "relative",
  },
  heading: {
    fontSize: "32px",
  },
  hr: {
    width: "50px",
  },
  featuredList: {
    display: "flex",
    listStyle: "none",
    justifyContent: "center",
    padding: "0 20px",
    cursor: "pointer",
    flexWrap: "wrap",
    gap: "10px"
  },
  featuredListItem: {
    padding: "0 5px",
    margin: "0 5px",
  },
  productCard: {
    padding: "15px",
    margin: "20px",
    width: "18%",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  productImage: {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
  },
  detailsLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "100",
  },
};

const FeaturedProducts = (props) => {
     const products = [
       {
         id: 1,
         name: "Classic Sneakers",
         price: 200,
         img: "/images/louis_vuitton.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 3,
       },
       {
         id: 2,
         name: "Running Shoes",
         price: 80,
         img: "/images/nike_air.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 3.5,
       },
       {
         id: 3,
         name: "Formal Shoes",
         price: 150,
         img: "/images/clarks.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 4,
       },
       {
         id: 4,
         name: "Sneakers",
         price: 120,
         img: "/images/nike_air2.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 5,
       },
       {
         id: 4,
         name: "Sneakers",
         price: 120,
         img: "/images/nike_air2.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 2,
       },
       {
         id: 4,
         name: "Sneakers",
         price: 120,
         img: "/images/nike_air2.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 3,
       },
       {
         id: 4,
         name: "Sneakers",
         price: 120,
         img: "/images/nike_air2.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 3,
       },
       {
         id: 4,
         name: "Sneakers",
         price: 120,
         img: "/images/nike_air2.jpg",
         desc: "lorem ipsum, lorem ipsum, bista nston nsojcihr ijspjcojert",
         rating: 3,
       },
     ];
  const {name} = (props)
  return (
    <div className="container" style={styles.container}>
      <h1 className="heading" style={styles.heading}>
        {name}
        <hr style={styles.hr} />
      </h1>
      <ul className="featuredCategoryList" style={styles.featuredList}>
        <li
          className="featuredCategoryListItem"
          style={styles.featuredListItem}
        >
          <Link to="/shop" style={styles.detailsLink}>
            All
          </Link>
        </li>
        <li
          className="featuredCategoryListItem"
          style={styles.featuredListItem}
        >
          <Link to="/shop" style={styles.detailsLink}>
            Sneakers
          </Link>
        </li>
        <li
          className="featuredCategoryListItem"
          style={styles.featuredListItem}
        >
          <Link to="/shop" style={styles.detailsLink}>
            Boots
          </Link>
        </li>
        <li
          className="featuredCategoryListItem"
          style={styles.featuredListItem}
        >
          <Link to="/shop" style={styles.detailsLink}>
            Formal Shoes
          </Link>
        </li>
        <li
          className="featuredCategoryListItem"
          style={styles.featuredListItem}
        >
          <Link to="/shop" style={styles.detailsLink}>
            Slides
          </Link>
        </li>
        <li
          className="featuredCategoryListItem"
          style={styles.featuredListItem}
        >
          <Link to="/shop" style={styles.detailsLink}>
            Flats
          </Link>
        </li>
      </ul>
      <div className="productListContainer">
        <div className="productList" style={styles.featuredList}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.img} alt="" style={styles.productImage} />
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.productPrice}>NGN {product.price}</p>
              <Link
                to={`/product/${product.id}`}
                state={{ product }} // Pass product data via state
                style={styles.detailsLink}
              >
                Show More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts