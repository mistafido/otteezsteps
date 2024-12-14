import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Cart = ({ cart }) => {

  // const [quantity, setQuantity] = useState(0)
  // // const onChange = (e) => {
  // //   e.preventDefault();
  // // }
  return (
    <div>
      <Navbar />
      <SideBar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Shopping Cart</h1>
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>SubTotal</td>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.product}>
                  <img src={item.img} alt="" style={styles.image} />
                  <p style={styles.productName}>{item.name}</p>
                </td>
                <td>NGN {item.price} </td>
                <td>
                  <input
                    type="number"
                    style={styles.quantity}
                    name="quantity"
                    placeholder="1"
                  />
                </td>
                <td>NGN 150</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cartBottom" style={styles.cartBottom}>
          <div className="right" style={styles.cartBottomLeft}>
            <p>Promotion Code</p>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter coupon code"
                style={styles.cartBottomLeftInput}
              />
              <button style={styles.leftButton}>Apply Coupon</button>
            </div>
            <button style={styles.rightButton}>
              <Link to="/shop" style={styles.detailsLink}>
                Continue Shopping
              </Link>
            </button>
          </div>
          <div className="left" style={styles.cartBottomRight}>
            <p>Cart Total</p>
            <table style={styles.table}>
              <tr>
                <td>SubTotal</td>
                <td>NGN{cart.reduce((sum, item) => sum + item.price, 0)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>NGN{cart.reduce((sum, item) => sum + item.price, 0)}</td>
              </tr>
            </table>
            <button style={styles.rightButton}>
              <Link to="/checkout" style={styles.detailsLink}>
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
        {/* {cart.lengtd > 0 ? (
          <>
            <ul style={styles.list}>
              {cart.map((item, index) => (
                <li key={index} style={styles.item}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p style={styles.total}>
              Total: ${cart.reduce((sum, item) => sum + item.price, 0)}
            </p>
            <Link to="/checkout" style={styles.link}>
              Proceed to Checkout
            </Link>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )} */}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "block",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "aqua",
    color: "black",
    borderRadius: "8px",
    width: "74%",
    height: "100%",
    marginLeft: "20%",
    marginRight: "5%",
    marginTop: "3%",
    marginBottom: "10%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    justifyContent: "space-between",
  },
  product: {
    display: "flex",
    justifyContent: "left",
    margin: "0 20px",
    padding: "10px 20px",
    width: "400px",
    alignItems: "center",
  },
  productName: {
    margin: "20px 20px",
    padding: "20px 20px",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    width: "75px",
    height: "75px",
    borderRadius: "10px",
  },
  table: {
    padding: "10px",
    backgroundColor: "grey",
    color: "white",
    width: "99%",
    textAlign: "left",
    borderRadius: "10px",
    margin: "5px",
  },
  tableHead: {
    borderBottom: "1px solid black",
    color: "black",
    padding: "0 10px",
    margin: "0 10px",
  },
  // tableRow: {
  //   backgroundColor: "white",
  //   color: "black",
  //   border: "1px solid white"
  // },
  quantity: {
    width: "30px",
    border: "1px solid black",
    margin: "0 10x",
    padding: "5px 10px",
    textAlign: "left",
    backgroundColor: "white",
    color: "black",
  },
  cartBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
    marginTop: "5px",
  },
  cartBottomRight: {
    alignItems: "right",
    margin: "10px 20px",
    padding: "10px 20px",
  },
  rightButton: {
    padding: "10px 10px",
    margin: "10px 10px",
    backgroundColor: "green",
    textDecoration: "none",
    color: "white",
    border: "1px solid green",
    cursor: "pointer",
    borderRadius: "10px"
  },
  cartBottomLeft: {
    width: "40%",
    alignItems: "left",
  },
  leftButton: {
    padding: "10px 10px",
    margin: "10px 0px",
    backgroundColor: "green",
    textDecoration: "none",
    color: "white",
    border: "1px solid green",
    cursor: "pointer",
  },
  cartBottomLeftInput: {
    padding: "10px 10px",
    margin: "10px 0px",
  },

  detailsLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "100",
  },
  // heading: { fontSize: "2rem", marginBottom: "20px" },
  // list: { listStyle: "none", padding: 0 },
  // item: { margin: "10px 0" },
  // total: { fontSize: "1.5rem", margin: "20px 0" },
  // link: { color: "#00acee", textDecoration: "none", fontWeight: "bold" },
};

export default Cart;
