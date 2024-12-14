import React, {useState} from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const styles = {
  container: {
    padding: "0",
    margin: "0",
    alignItems: "center",
        justifyContent: "center",
    
  },
  contactContainer: {
    margin: "5% 30%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "1px solid black",
    backgroundColor: "turquoise",
    color: "black",
    borderRadius: "10px",
  },
  inputContainer: {
    padding: "10px 10px",
    margin: "10px 10px",
    diplay: "block",
  },
  input: {
    padding: "15px 15px",
    border: "1px solid grey",
    borderRadius: "10px",
    width: "450px",
    fontSize: "16px",
  },
  textarea: {
    padding: "15px 15px",
    border: "1px solid grey",
    borderRadius: "10px",
    width: "450px",
    fontSize: "16px",
    height: "100px",
  },
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
    fontWeight: "100"
  },
  buttonContainer: {
    padding: "10px 10px",
    margin: "10px 10px",
    justifyContent: "center",
    alignItems: "center",
  },
};
const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
    //   try {
    //     const response = await fetch("/api/contact", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    //       alert("Message sent successfully!");
    //       setFormData({ name: "", email: "", subject: "", message: "" });
    //     } else {
    //       alert("Failed to send message.");
    //     }
    //   } catch (error) {
    //     alert("An error occurred: " + error.message);
        //   }
        console.log(formData)
    };

  return (
    <div className="container" style={styles.container} id="contactUs">
      <div className="contactContainer" style={styles.contactContainer}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer" style={styles.inputContainer}>
            <input
              type="text"
              style={styles.input}
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer" style={styles.inputContainer}>
            <input
              type="email"
              style={styles.input}
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer" style={styles.inputContainer}>
            <input
              type="text"
              style={styles.input}
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer" style={styles.inputContainer}>
            <textarea
              name="message"
              style={styles.textarea}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer" style={styles.buttonContainer}>
              <button type='submit' style={styles.button}>Submit</button>
          </div>
        </form>
      </div>
     
    </div>
  );
}

export default ContactPage