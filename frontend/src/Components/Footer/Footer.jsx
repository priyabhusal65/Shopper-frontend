import React from 'react'
import "./Footer.css"
import instagram_icon from "../Assets/instagram.png"
import pinterest_icon from "../Assets/pinterest.png"
import whatsapp_icon from "../Assets/whatsapp.png"
import footer_logo from "../Assets/footer_logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Rserved</p>
        </div>
    </div>
  )
}

export default Footer
