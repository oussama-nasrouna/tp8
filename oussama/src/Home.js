import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

import Title from './Components/Title'

 class Home extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Title/>
          <Footer/>
      </div>
    )
  }
}

export default Home