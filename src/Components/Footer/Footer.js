import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer_section">
                <div className="container">
                    <div className="email_form">
                        <input type="text" className="form-group" placeholder="Email"/>
                        <button className="subscribe_button">Subscribe</button>
                    </div>

                    <div className="footer_content">
                        <div className="row ">
                            <div className="col-lg-4 col-md-4 ">
                                <h5>Contact</h5>
                                <p>Kawranbazar,<br/> Dhaka<br/> Bangladesh</p>
                                <p>info@fundednext.com </p>
                            </div>
                            <div className="col-lg-4 col-md-4  footer_about">
                                <h5>Learn about FundedNext</h5>
                                <p>About </p>
                                <p>Our Products</p>
                                <p>FAQs</p>
                                <p>Privacy </p>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <h5 className="footer_social">Get updates from </h5>
                                 <div className="social_icon">
                                     <p><i class="fab fa-facebook-square facebook"></i>Facebook</p>
                                     <p><i class="fab fa-twitter-square  twitter"></i>Twitter</p>
                                     <p><i class="fab fa-youtube  youtube"></i>Youtube</p>
                                     <p><i class="fab fa-instagram  instagram"></i>Instagram</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_last text-center">
                    <p> © 2021 FundedNext Ltd. All Rights Reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;