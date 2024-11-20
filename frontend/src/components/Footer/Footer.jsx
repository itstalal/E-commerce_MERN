import React from 'react'
import footer_logo from '../assets/Frontend_Assets/logonew.webp'
import instagram_icon from '../assets/Frontend_Assets/instagram_icon.png'
import pinteser_icon from '../assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../assets/Frontend_Assets/whatsapp_icon.png'
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img width={'60px'} src={footer_logo} alt='' />
            <p>MAGENTO</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt='' />
            </div>
            <div className='footer-icons-container'>
                <img src={pinteser_icon} alt='' />
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt='' />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright  2024 Shopper</p>
        </div>
    </div>
  )
}

export default Footer