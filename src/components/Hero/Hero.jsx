import React from 'react'
import "./Hero.css"
import Profile_Image from "../../assets/profile.jpg"
import Bar from "../../assets/bar.png"

const Hero = () => {
  return (
    <div className='home' id='home'>
        <div className="hero_img">
            <img src={Profile_Image} alt="Image" />
        </div>

      <div className="hero_subtitle">
        <h3>YOUR TRUSTED</h3>
        <img src={Bar} alt="Image" />
      </div>

      <div className="hero_title">
        <h1>Professional House Cleaning Services You Can Rely On</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis beatae illum sapiente dicta ut iure maxime, cumque molestiae quia?</p>
        <div className="hero_btn">
        Learn More
        </div>
      </div>

    </div>
  )
}

export default Hero
