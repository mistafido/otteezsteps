import React from 'react'
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    color: "black",
    backgroundColor: "turquoise",
    position: "relative",
  },
  heading: {
      fontWeight: "300",
      fontSize: "28px"
  },
  subheading: {
    fontWeight: "600",
    fontSize: "44px",
    color: "green",
  },
  description: {
    width: "40%",
    margin: "0 30%",
    fontsize: "10px",
  },
  testimonialList: {
    display: "flex",
    listStyle: "none",
    justifyContent: "center",
    padding: "0 20px",
    margin: "20px 0",
    cursor: "pointer",
  },
  testimonialImage: {
    marginTop: "30px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  testimonialCard: {
    padding: "0 10px",
    margin: "0 10px",
    width: "30%",
    backgroundColor: "grey",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  testimonialDescription: {
    padding: "10px",
    margin: "10px",
    textAlign: "center",
  },
  testimonialName: {
    color: "turquoise",
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const Testimonials = () => {

    const testimonies = [
      {
        id: 1,
        desc: "Classic Fixorepair company is an online repair service center for all kinds of Home Appliances and it has a large network. You can contact us from anywhere in India and get the facility from our service center. Our Company is your one-stop solution to all your home-based service requirements.Sneakers",
        customer_name: "John Doe",
        image: "/images/fendi.jpg",
        rating: "2.5/5",
      },
      {
        id: 2,
        desc: "Classic Fixorepair company is an online repair service center for all kinds of Home Appliances and it has a large network. ",
        customer_name: "John Thomas",
        image: "/images/fendi.jpg",
        rating: "4.5/5",
      },
      {
        id: 3,
        desc: "Classic Fixorepair company is an online repair service center for all kinds of Home Appliances and it has a large network. You can contact us from anywhere in India and get the facility from our service center. Our Company is your one-stop solution to all your home-based service requirements.Sneakers",
        customer_name: "Jane Doe",
        image: "/images/fendi.jpg",
        rating: "3.5/5",
      },
    ];
  return (
    <div className="container" style={styles.container}>
      <h3 style={styles.heading}>Testimonials</h3>
      <h1 style={styles.subheading}>What Customers Say</h1>
      <p style={styles.description}>
        We place huge values on strong relationships and have seen the benefit
        they bring to our business. Customer feedback is vital in helping us get
        it right.
      </p>
      <div className="testimonialCardContainer">
        <ul className="testimonialList" style={styles.testimonialList}>
          {testimonies.map((testimony) => (
            <li key={testimony.id} style={styles.testimonialCard}>
              <img src={testimony.image} alt="" style={styles.testimonialImage} />
              <p style={styles.testimonialDescription}>
                {testimony.desc}
              </p>
                  <h4 style={styles.testimonialName}>{ testimony.customer_name}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Testimonials