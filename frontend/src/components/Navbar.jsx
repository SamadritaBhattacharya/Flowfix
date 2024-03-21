import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <header>
            <h2 id='logo' className='font-bold'>Water Watch</h2>
            <nav className='navigation space-x-12'>
                <a href = "a">Home</a>
                <a href = "a">About</a> 
                <a href = "a">Services</a>
                <a href = "a">Contact</a>
            </nav>
        </header>
    </div>
  )
}

export default Navbar