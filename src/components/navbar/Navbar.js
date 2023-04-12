import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo"><Link to="/" >BookingApp</Link></div>
            <div className="buttons">
                <button>Register</button>
                <button>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar