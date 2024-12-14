import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px",
    height: "84%",
  },
  bannerText: {
    margin: "10px 40px",
    padding: "10px 10px",
    width: "30%",
  },
  bannerTextHeading: {
    fontSize: "20px",
    fontWeight: "100",
  },
  bannerTextMain: {
    fontSize: "40px",
    fontWeight: "600",
  },
  bannerTextButton: {
    padding: "8px 20px",
    backgroundColor: "green",
    color: "white",
    border: "1px solid white",
    cursor: "pointer",
    borderRadius: "10px",
  },
  bannerImageContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bannerImage: {
    width: "500px",
    height: "350px",
    margin: "10px 60px",
    padding: "10px 10px",
    cursor: "pointer",
    pointer: "none",
    borderRadius: "20px",
  },
  detailsLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "100",
    padding: "10px 10px",
    margin: "10px 10px",
  },
};

const Banner = () => {
  return (
    <div className="container" style={styles.container}>
      <div className="bannerText" style={styles.bannerText}>
        <h3 className="bannerTextheading" style={styles.bannerTextHeading}>
          Featured Products
        </h3>
        <h1 className="bannerTextMain" style={styles.bannerTextMain}>
          20% off for Select Items
        </h1>
        <p className="bannerTextDescription">lorem ipsum lorem ipsum</p>
        <button className="bannerTextButton" style={styles.bannerTextButton}>
          <Link to="/shop" style={styles.detailsLink}>
            Shop Now
          </Link>
        </button>
      </div>
      <div className="bannerImageContainer" style={styles.bannerImageContainer}>
        <img
          alt="bannerimage"
          src="/images/fendi.jpg"
          style={styles.bannerImage}
        />
      </div>
    </div>
  );
}

export default Banner