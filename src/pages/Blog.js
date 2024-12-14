import React from 'react'
import Navbar from '../components/Navbar'

const styles = {
  span: {
    textAlign: "center",
    alignItems: "center",
    color: "white",
    justifyContent: "center"
  }
}
const Blog = () => {
  return (
      <div>
      <Navbar />
      <span style={styles.span}>Coming Soon</span>
    </div>
  )
}

export default Blog