import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_container">
            <div className="footer_left">
                <p>About Us</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            <div className="footer_right">
                <p>© {new Date().getFullYear()} Hose Cleaning. All rights reserved.</p>
                <p>Developed By: Nsikan Essoh</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
