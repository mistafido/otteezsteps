import React from 'react'
import AdBanner from '../components/AdBanner'
import SideBar from '../components/SideBar'
import Home from '../components/Home'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'


const styles = {
    homepageContainer: {
        display: "flex",
        justifyContent: "spaceBetween",
    },
    container: {
        display: "block"
    }
}
const HomePage = () => {
  
  return (
    <div className="container" style={styles.container}>
      <AdBanner />
      <div className="homepagecontainer" style={styles.homepageContainer}>
        <Home />
        <SideBar />
      </div>
      <FeaturedProducts name="Featured Products" />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage