import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: "flex",
    height: "10%",
    justifyContent: "space-between",
    backgroundColor: "turquoise",
    color: "black"
  },
  topList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
  },
  topListItem: {
    margin: "0 10px",
    cursor: "pointer",
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "1rem",
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 50px",
    margin: "0 50px",
  },
};

const Footer = () => {
  return (
    <div className="container" style={styles.container}>
      <div className="top">
        <ul style={styles.topList}>
          <li style={styles.topListItem}>
            <Link to="" style={styles.link}>
              About
            </Link>
          </li>
          <li style={styles.topListItem}>
            <Link to="" style={styles.link}>
              Privacy Policy
            </Link>
          </li>
          <li style={styles.topListItem}>
            <Link to="" style={styles.link}>
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom" style={styles.bottom}>
        <div className="copyright" style={styles.bottomCopyright}>
          &copy; Copyright {new Date().getFullYear()}. Designed by OtteezTech
        </div>
      </div>
    </div>
  );
}

export default Footer