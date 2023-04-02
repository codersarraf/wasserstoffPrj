import React from 'react'
import '../Navbar/navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
      <nav className='nav'>
            <ul id='nav'>
                <li><NavLink to="/statistics" className='index-link' >Statistics</NavLink></li>
                <li><NavLink to="/overview" className='home-link'>Overview</NavLink></li>
                <li><NavLink to="/dashboard" className='home-link'>Dashboard</NavLink></li>
                <li><NavLink to="/analytics" className='home-link'>Analytics</NavLink></li>
            </ul>
            
        </nav>
  )
}

export default Navbar