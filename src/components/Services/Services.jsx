import React from 'react'
import "./Services.css"
import Bar from "../../assets/bar.png"
import Services_One from "../../assets/services_one.png"
import Services_Two from "../../assets/services_two.png"
import Services_Tag_Two from "../../assets/services.jpg"
import Service_Image from "../../assets/service_image.jpg"
import Tag_Three from "../../assets/steptodown.jpg"


const Services = () => {
  return (
    <div className='services'>
        <div className="service_tag_one">
            <div className="services_container">
            <div className="services_left">
                <div className="services_left_img">
                    <img src={Services_Two} alt="" />
                </div>
                <div className="services_left_text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas expedita aliquam asperiores, dicta quas ex iste eaque? Quaerat porro saepe dolorem.</p>
                </div>
            </div>

            <div className="services_right">
                <div className="services_title">
                    <h1>Our Services</h1>
                    <img src={Bar} alt="" />
                </div>
                <div className="services_right_text">
                    <h1>Dedicated to Providing Exceptional Cleaning Services</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam voluptatem quos officia molestias nihil quas delectus. Sit, labore tempora.</p>
                </div>
                <div className="services_right_img">
                    <img src={Services_One} alt="" />
                </div>
            </div>
            </div>
        </div>

        <div className="service_tag_two">
            <div className="tag_two_imgBackground">
                <img src={Services_Tag_Two} alt="" />
            </div>
            <div className="tag_two_container">
                <div className="tag_two_title">
                    <h2>Our Offerings</h2>
                    <img src={Bar} alt="" />
                    <h1>Discover Our Comprehensive <br />Cleaning Services</h1>
                </div>
                <div className="card_container">
                    <div className="card">
                        <div className="card_top">
                            <h1>01.</h1>
                        </div>
                        <div className="card_bottom">
                            <h3>Standard Home Cleaning</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vel veritatis accusamus dolor itaque.</p>
                            <div className="card_btn">
                                <button>
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_top">
                            <h1>02.</h1>
                        </div>
                        <div className="card_bottom">
                            <h3>Deep Cleaning</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vel veritatis accusamus dolor itaque.</p>
                            <div className="card_btn">
                                <button>
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_top">
                            <h1>04.</h1>
                        </div>
                        <div className="card_bottom">
                            <h3>More in/out Cleaning</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vel veritatis accusamus dolor itaque.</p>
                            <div className="card_btn">
                                <button>
                                    READ MORE
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="how_we_work_container">
            <div className="how_we_work">
                <div className="how_we_work_upper">
                    <div className="how_we_work_upper_left">
                        <h1>Transform Your Space Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum deserunt voluptatum ipsam neque autem reprehenderit obcaecati porro.</p>
                        <img src={Service_Image} alt="" />

                    </div>
                </div>
                <div className="how_we_work_upper_right">
                    <button>Subscribe</button>
                </div>
            </div>
            
            <div className="how_we_work_lower">
                <div className="how_we_work_lower_text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h1>How We Work</h1>
                </div>

                <div className="how_we_work_upper_float">
                    <div className="float_one">
                        <h5>Step-01</h5>
                        <h1>Schedule & Cleaning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusamus nemo at aut veniam earum nulla. Temporibus incidunt voluptatem suscipit.</p>
                    </div>
                    <div className="float_two">
                        <h5>Step-02</h5>
                        <h1>Professional Cleaning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusamus nemo at aut veniam earum nulla. Temporibus incidunt voluptatem suscipit.</p>
                    </div>
                    <div className="float_three">
                        <h5>Step-03</h5>
                        <h1>Satisfaction Guaranteed</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusamus nemo at aut veniam earum nulla. Temporibus incidunt voluptatem suscipit.</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className="service_tag_three">
            <div className="tag_three_upper">
                <img src={Tag_Three} alt="" />
            </div>
            <div className="tag_three_lower">
                <div className="tag_three_lower_left">
                    <div className="lower_left_text">
                        <p>Hose cleaning did an amazing job on my house! They were thorough, friendly and left everything sparkling clean. Lorem ipsum dolor sit amet consectetur.</p>
                        <h5>Lorem Fantacie</h5>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero corrupti hic aperiam eaque voluptatum tempore eum quos nam quia.</p>
                        <h5>Lorem Fantacie</h5>
                    </div>
                </div>
                <div className="tag_three_lower_right">
                    <h4>WHAT CLIENTS SAY</h4>
                    <h1>Real Experiences from <br />Happy Customers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repudiandae quam perspiciatis!</p>
                </div>
            </div>
        </div>
      
    </div>
    
  )
}

export default Services;
