import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    backgroundColor: "grey",
    color: "white",
    position: "relative",
    margin: "0",
    padding: "0 2%"
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emailText: {
    fontSize: "11px",
    margin: "0 10px",
  },
  advertisement: {
    margin: "0",
    alignItems: "left",
    justifyContent: "center",
  },
  adText: {
    fontSize: "11px",
    margin: "0 10px",
    padding: "5px",
    animation: 'fadeIn 2.5s'
  },
  socialIcons: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    margin: "1px 1%",
    
  },
  loginButton: {
    fontSize: "11px",
    width: "100px",
    padding: "0",
    border: "1px solid grey",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
    borderRadius: "20px",
  },
  detailsLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "100",
  },
};
const AdBanner = () => {

  const textList = ["Welcome to our site!", "Enjoy your stay!", "Explore amazing discount!", "Free shipping!"];
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev+1)%textList.length)
    }, 3000);
    return () => clearInterval(interval)
  }, [textList.length])
  return (
    <div className="container" style={styles.container}>
      <div className="emailContainer" style={styles.emailContainer}>
        <FaEnvelope size={15} style={{ margin: "1% 1%" }} color="aqua" />
        <p style={styles.emailText}>otteezsteps@gmail.com</p>
      </div>
      <div className="advertisement" style={styles.advertisement}>
        <p style={styles.adText}>{textList[currentText] }</p>
      </div>
      <div className="socialIcons" style={styles.socialIcons}>
        <FaFacebook size={15} style={{ margin: "1% 1%" }} color="aqua" />
        <FaInstagram size={15} style={{ margin: "1% 1%" }} color="aqua" />
        <FaTwitter size={15} style={{ margin: "1% 1%" }} color="aqua" />
        <FaWhatsapp size={15} style={{ margin: "1% 1%" }} color="aqua" />
      </div>
    </div>
  );
}

export default AdBanner