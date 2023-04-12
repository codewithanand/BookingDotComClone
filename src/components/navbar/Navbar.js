import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">BookingApp</div>
            <div className="buttons">
                <button>Register</button>
                <button>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar