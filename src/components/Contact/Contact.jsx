import React from 'react'
import "./Contact.css"
import Contact_Background from "../../assets/contact_background.jpg"
import Contact_Image_1 from "../../assets/contact_1.jpg"
import Contact_Image_2 from "../../assets/contact_2.jpg"


const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact_content">
            <div className="contact_img_background">
                <img src={Contact_Background} alt="" />
            </div>
            <div className="other_contents">
                <div className="smaller_img">
                    <img src={Contact_Image_1} alt="" className="img1" />
                    <img src={Contact_Image_2} alt="" className="img2" />
                </div>
                <div className="contact_texts">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <h1>Transform Your Space with our <br /> Expert Cleaning Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, commodi.</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
