import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '../images/logo.png'

import '../Header/headers.css'


 
function Headers() {
  return (
    <div id='header'>
        
        <img id='logo' src={logo} alt="logo" /> <span id='logo_name'>WASSERSTOFF</span>
        <input type="search" placeholder='Enjoy Searching...' id='searchbar'/>
        <div className="cont">
          <Navbar/>
          <div id="icons">
              <span  className="material-symbols-outlined icon">person</span>
              <span className="material-symbols-outlined icon">tune</span>
          </div>
        </div>
        

       
        
   </div>
  )
}

export default Headers