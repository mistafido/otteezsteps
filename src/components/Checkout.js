import React, { useState} from "react";
//import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    address: "",
    city: "",
    postalcode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.heading}>Checkout</h1>
      <div className="checkoutContainer" style={styles.checkoutContainer}>
        <div className="shipping-payment" style={styles.shippingPayment}>
          <div className="shipping-address" style={styles.shippingAddress}>
            <div className="address" style={styles.address}>
              <h3>Shipping Address</h3>
              <form onSubmit={handleSubmit}>
                <div className="row" style={styles.inputContainer}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row" style={styles.inputContainer}>
                  <input
                    style={styles.input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row" style={styles.inputContainer}>
                  <input
                    style={styles.input}
                    type="text"
                    name="number"
                    placeholder="Number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row" style={styles.inputContainer}>
                  <input
                    style={styles.input}
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row" style={styles.inputContainer}>
                  <input
                    style={styles.input}
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row" style={styles.inputContainer}>
                  <input
                    style={styles.input}
                    type="text"
                    name="postalcode"
                    placeholder="Postal Code"
                    value={formData.postalcode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" style={styles.shippingButton}>
                  Save
                </button>
              </form>
            </div>
            <div className="payment" style={styles.payment}>
              <h3>Payment</h3>
              <p>Make deposit to the below account to order your products</p>
              <div className="row" style={styles.paymentRow}>
                <label>
                  <b>Bank Name:</b>
                </label>
                <span>Opay</span>
              </div>
              <div className="row" style={styles.paymentRow}>
                <label>
                  <b>Account Number:</b>
                </label>
                <span>0987654321</span>
              </div>
              <div className="row" style={styles.paymentRow}>
                <label>
                  <b>Account Name:</b>
                </label>
                <span>Frederick Ottache</span>
              </div>
              <div className="row" style={styles.paymentRow}>
                <label>
                  <b>Amount to be Paid:</b>
                </label>
                <span>NGN {total}</span>
              </div>
              <div className="row" style={styles.paymentRow}>
                <label>
                  <b>Message:</b>
                </label>
                <span>Order for Goods from Otteez Steps</span>
              </div>
              <p>
                <a href="whatsapp_link" style={styles.link}>
                  Send receipt to this link to confirm your order
                </a>
              </p>
              <hr style={styles.line} />
              <div className="cryptoPay" style={styles.cryptoPay}>
                <img alt="qr_code" style={styles.qrCode} src="qrcode.png" />
                <p>
                  Make the crypto equivalent payment for your order to the USDT
                  address above!
                </p>
              </div>
              <p>
                <a href="whatsapp_link" style={styles.link}>
                  Send receipt to this link to confirm your order
                </a>
              </p>
              <hr style={styles.line} />
              <Link to="" style={styles.link}>
                <button style={styles.button}>Download Receipt</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="cart" style={styles.cart}>
          <h3 className="cartHeading" style={styles.cartHeading}>
            Cart
          </h3>
          <table style={styles.table}>
            <thead>
              <td>Cart Item</td>
              <td>
                <icon></icon>
                <span>{cart.length}</span>
              </td>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>NGN {item.price}</td>
                </tr>
              ))}
              <hr style={styles.line} />
              <tr>
                <td>Total: </td>
                <td>
                  <span>NGN {total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  container: { textAlign: "left" },
  checkoutContainer: {
    display: "flex",
  },
  cart: {
    backgroundColor: "aqua",
    width: "60%",
    height: "70%",
    padding: "10px",
    margin: "10px 30px",
    borderRadius: "10px",
    color: "black",
    display: "column",
  },
  cartHeading: {
    fontSize: "1.5rem",
    margin: "20px 30px",
  },
  table: {
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    width: "99%",
    textAlign: "left",
    borderRadius: "10px",
    margin: "5px",
    cursor: "pointer",
  },
  heading: { fontSize: "2rem", margin: "20px 30px" },
  shippingPayment: {
    backgroundColor: "aqua",
    width: "60%",
    height: "70%",
    padding: "10px",
    margin: "10px 30px",
    borderRadius: "10px",
    color: "black",
    display: "column",
  },
  shippingAddress: {
    display: "flex",
    justifyContents: "space-between",
    margin: "10px 10px",
    padding: "10px 10px",
    width: "90%",
  },
  address: {
    display: "column",
    width: "50%",
    margin: "5px 5px",
    padding: "5px 10px",
  },
  // addressRow: {
  //   display: "column",
  //   alignItems: "left",
  //   justifyContents: "flex-start",
  //   margin: "10px 0",
  //   padding: "5px 0",
  // },
  // addressInput: {
  //   padding: "8px 8px",
  // },
  inputContainer: {
    padding: "10px 10px",
    diplay: "block",
    width: "45%",
    margin: "0px",
  },

  input: {
    padding: "15px 15px",
    border: "1px solid grey",
    borderRadius: "10px",
    width: "250px",
    fontSize: "16px",
  },
  // buttonContainer: {
  //   padding: "10px 10px",
  //   margin: "10px 10px",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  shippingButton: {
    padding: "10px 20px",
    margin: "10px 30px",
    backgroundColor: "green",
    textDecoration: "none",
    color: "white",
    border: "1px solid green",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "100",
  },
  payment: {
    display: "column",
    width: "50%",
    margin: "5px 0px",
    padding: "10px 0px",
  },
  paymentRow: {
    display: "flex",
    justifyContents: "space-between",
    padding: "3px 5px",
  },
  line: {
    border: "1px solid black",
  },
  cryptoPay: {
    alignItems: "center",
    justifyContents: "center",
    margin: "10px 30px",
    padding: "5px 10px",
  },
  qrCode: {
    width: "200px",
    height: "200px",
    alignItems: "center",
    justifyContents: "center",
    borderRadius: "10px",
  },
  button: {
    padding: "10px 10px",
    margin: "10px 0px",
    backgroundColor: "green",
    textDecoration: "none",
    color: "white",
    border: "1px solid green",
    cursor: "pointer",
    borderRadius: "10px",
  },
  total: { fontSize: "1.5rem", marginBottom: "20px" },
  link: { color: "green", textDecoration: "none", fontWeight: "100" },
};

export default Checkout;
