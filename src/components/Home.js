import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';

const styles = {
  container: {
    width: "84%",
    backgroundColor: "white",
    height: "70%",
    color: "black",
    position: "absolute",
    flex: "right",
    marginLeft: "16%",
    padding: "0 0 10px",
    marginBottom: "10px"
  },
};

const Home = () => {
 
  return (
    <div className="container" style={styles.container}>
      <Navbar />
      <Banner />
    </div>
  );
}

export default Home