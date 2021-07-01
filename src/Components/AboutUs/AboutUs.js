import React from 'react';
import './AboutUs.css';
import about_img from '../../assets/images/Mask Group.png'
import about_img2 from '../../assets/images/Group.png'

const AboutUs = () => {
    return (
        <>
            <div className="about_section">
                <div className="about_background">
                    <img src={about_img2} alt="" className="about_img_two"/>
                <div className="about_text container">
                    <h5 className="about_line">Get an idea<br/> <span style={{color:"#FF9900"}}>About Us</span><i class="fas fa-chevron-double-right right_arrow"></i></h5>  
                </div>
                    <div className="about_img text-center">
                        <img src={about_img} alt="" />
                    </div>
                </div>    
            </div> 

            <div className="about_details">
                <div className="about_details_background">
                
                    <div className="about_details_text text-center ">
                        <h3>What is <br/>
                               <span style={{color:"#FF9900"}}> Funded Trader Program?</span></h3>
                         <p className="mt-4">A funded trader program is designed for traders who have skills and experience but are lacking enough capital to make trading<br/> full time profitable</p>      
                    </div>
                  <div className="container">
                    <div className="row about_question">
                        <div className="col-lg-6">
                            <h5>Why is it Needed?</h5>
                            <p>Funded trader programs allow you to leverage your trading skills and increase your earning potential without spending your own hard ear- ned</p>
                        </div>
                        <div className="col-lg-6">
                            <h5>How does it work?</h5>
                            <p>Get instant funding with a funded trader prog- ram and accelerate your trading career.</p>
                        </div>

                        <div className="col-lg-6">
                            <h5>What is the benefits of it?</h5>
                            <p>Funded trader program is designed to help po- tential traders like you to grow their skills, and help you rise to the top in the FX market.</p>
                        </div>
                        <div className="col-lg-6">
                            <h5>What is the ultimate goal?</h5>
                            <p>The ultimate goal of a funded trader program is to empower traders and enable driven indiv- iduals to become successful in trading.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;