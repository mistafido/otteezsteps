import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const styles = {
  container: {
    textAlign: "center",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 20%",
    backgroundColor: "turquoise",
    borderRadius: "10px",
    color: "black",
    marginBottom: "11%"
  },
  imageContainer: {
    width: "45%",
    margin: "0 10px",
    padding: "10px",
  },
  image: {
    width: "300px",
    height: "300px",
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
  // buttonContainer: {
  //   padding: "10px 10px",
  //   margin: "10px 10px",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  button: {
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
  register: {
    margin: "10px",
    padding: "15px"
  }
};

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    <div className="container" style={styles.container}>
      <Navbar />
      <h1>Login</h1>
      <div className="loginContainer" style={styles.loginContainer}>
        <div className="imageContainer" style={styles.imageContainer}>
          <img alt="login" src="logo.png" style={styles.image} />
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h3>Enter your Login Details</h3>
            <div className="inputContainer" style={styles.inputContainer}>
              <input
                style={styles.input}
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputContainer" style={styles.inputContainer}>
              <input
                style={styles.input}
                type="text"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputContainer">
              <button type="submit" style={styles.button}>
                Login
              </button>
            </div>
            <span style={styles.register}>
              No Account? <a href="/register">Register Here</a>
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login