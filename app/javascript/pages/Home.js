import React, { Component } from 'react'
import apartment from "../../assets/images/apartment.jpg"

class Home extends Component {
  render() {
    return(
      <>
      <h3>Welcome to the Apartment App!</h3>
      <div id = "apartment">
        <img id = "happy" src = {apartment} alt= "Happy to help you find an apartment" />
      </div>
      </>
    )
  }
}

export default Home