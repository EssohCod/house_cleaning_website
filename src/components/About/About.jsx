import React from 'react'
import "./About.css"
import About_Image from "../../assets/about.jpg"
import ABout_Img from "../../assets/about_1.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className="about_container">
            <div className="about_left">
                <div className="about_left_down">
                    <h1>20+</h1>
                </div>
                <div className="about_left_down">
                    <h2>Eco-friendly</h2>
                    <p>Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="about_middle">
                <div className="about_middle_top">
                    <img src={About_Image} alt="" />
                </div>
                <div className="about_middle_bottom">
                    <h1>98%</h1>
                    <h2>Trained Staff</h2>
                    <p>Lorem ipsum dolor sit amet elit. Ratione incidunt voluptas sapiente ullam consequatur.</p>
                </div>
            </div>

            <div className="about_right">
                <div className="about_right_top">
                    <h1>98%</h1>
                    <h2>On-time Guarantee</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, explicabo!</p>
                </div>
                <div className="about_right_bottom">
                    <img src={ABout_Img} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
