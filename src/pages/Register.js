import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const styles = {
  container: {
    margin: "0",
    padding: "0",
    justifyContent: "center",
    alignItems: "center",
  },
  registerContainer: {
    display: "flex",
    width: "60%",
    margin: "3% 15%",
    padding: "3% 5%",
    backgroundColor: "turquoise",
    borderRadius: "10px",
  },
  imageContainer: {
    width: "45%",
    margin: "5% 8%",
  },
  image: {
    width: "200px",
    height: "200px",
      borderRadius: "10px",
  },
  inputContainer: {
    padding: "10px 10px",
    diplay: "block",
    width: "45%",
    margin: "0 30px",
  },

  input: {
    padding: "15px 15px",
    border: "1px solid grey",
    borderRadius: "10px",
    width: "350px",
    fontSize: "16px",
    
  },
  button: {
    padding: "10px 20px",
    margin: "10px 70%",
    backgroundColor: "green",
    textDecoration: "none",
    color: "white",
    border: "1px solid green",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "100",
  },
  heading: {
    margin: "3% 20%",
  },
};

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
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
    <div className="container">
      <Navbar />
      <h1 style={styles.heading}>Register Account</h1>
      <div className="registerContainer" style={styles.registerContainer}>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="inputContainer" style={styles.inputContainer}>
              <input
                className="input"
                style={styles.input}
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputContainer" style={styles.inputContainer}>
              <input
                className="input"
                style={styles.input}
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputContainer" style={styles.inputContainer}>
              <input
                className="input"
                style={styles.input}
                type="text"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputContainer" style={styles.inputContainer}>
              <input
                className="input"
                style={styles.input}
                type="text"
                name="cpassword"
                placeholder="Confirm password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputContainer" style={styles.inputContainer}>
              <button type="submit" style={styles.button}>
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="imageContainer" style={styles.imageContainer}>
          <img src="logo.png" alt="logo" style={styles.image} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register