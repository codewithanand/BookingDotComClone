import React from 'react'
import './mailList.scss'

const MailList = () => {
  return (
    <div className="mailList">
        <h1>Save Time, Save Money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="mail">
            <input type="text" placeholder='Your email address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList