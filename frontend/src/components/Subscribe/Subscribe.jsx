import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exlusive Offers On Your Email</h1>
        <p>Subscribe in our newletter and stay updated</p>
        <div>
            <input type="email" placeholder="Enter Your Email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe