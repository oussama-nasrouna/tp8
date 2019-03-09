import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

 class Navbar extends Component {
  render() {
    return (
     
         <nav className="navbar navbar-expand-sm navbar-light bg-light">
             <Link className="navbar-brand" to="#">Blog</Link>
            
              
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                     <li className="nav-item active">
                         <Link className="nav-link" to="/">Home </Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/la">Liste des articles</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="#">Qui sommes Nous</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/offre">Nos offres</Link>
                     </li>
                     
                 </ul>
                
             
         </nav>
      
    )
  }
}

export default Navbar
