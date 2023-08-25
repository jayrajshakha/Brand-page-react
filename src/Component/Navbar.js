import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="https://www.lunapic.com/editor/premade/transparent.gif" alt="logo" />
        </div>
        <div className='navigation'>
            <ul>
                <li>
                    <a href="/">MENU</a>
                </li>
                <li>
                    <a href="/">LOCATION</a>
                </li>
                <li>
                    <a href="/">ABOUT</a>
                </li>
                <li>
                    <a href="/">CONTACT</a>
                </li>
            </ul>
        </div>
        <div className='login'>
           <button> LOGIN  </button>
        </div>
        
    </div>
  )
}

export default Navbar
