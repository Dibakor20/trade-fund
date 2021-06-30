import React from 'react';
import './Hero.css'
import heroImg1 from '../../assets/images/Paid dashboard.png'
import heroImg2 from '../../assets/images/image 6.png'
import heroImg3 from '../../assets/images/image 7.png'
import heroImg4 from '../../assets/images/image 8.png'



const Hero = () => {
    return (
        <>
            <div className="hero_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <div className="hero_banner">
                                <div className="hero_text">
                                <h5 className="">Our Fund, Your Profit</h5>
                                <h3>Trade Up to $100,000</h3>
                                <p>We offer up to $100,000 to financially empower global traders and help earn full-time</p>
                                <button className="hero_button_one mr-3 mt-3">Get Funded Now</button>
                                <button className="hero_button_two mt-3">Short Demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <div className="hero_image">
                                <div className="circle_image"></div>
                                {/* <img classname="hero_img_one" src={heroImg1} alt="" /> */}
                                
                                {/* <img src={heroImg2} alt="" />
                                <img src={heroImg3} alt="" /> */}


                       <div className="experience__img grid mt-5">
                        <div className="experience__overlay text-center">
                            <img src={heroImg1} alt="" className="experience__img-one"/>
                        </div>
                        
                        <div className="experience__overlay">
                            <img src={heroImg2} alt="" className="experience__img-two"/>
                        </div>

                        <div className="experience__overlay">
                            <img src={heroImg3} alt="" className="experience__img-two"/>
                        </div>

                        <div className="experience__overlay">
                            <img src={heroImg4} alt="" className="experience__img-two"/>
                        </div>
                    </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;