import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className='hunger'/>
            <p>Welcome to our online order website! Here, you can browse our wide selection of products and place orders from the comfort of your own home.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9131121465</li>
                <li>pintunayak770@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Copyright 2024. All Rights Reserved by Nayak</p>
    </div>
  )
}

export default Footer
