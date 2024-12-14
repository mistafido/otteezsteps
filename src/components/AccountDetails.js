import React from "react";

const AccountDetails = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Account Details</h1>
      <p style={styles.details}>
        Bank Name: Your Bank
        <br />
        Account Number: 1234567890
        <br />
        Account Name: Your Name
      </p>
    </section>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  heading: { fontSize: "2rem", marginBottom: "20px" },
  details: { fontSize: "1.2rem", lineHeight: "1.8" },
};

export default AccountDetails;
