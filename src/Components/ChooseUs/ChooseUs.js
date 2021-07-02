import React from 'react';
import './ChooseUs.css'
import  chooseImg from '../../assets/images/Group 9575.png'

const ChooseUs = () => {
    return (
        <>
            <div className="choose_us_section">
                <div className="choose_us_background">
                  <img src={chooseImg} alt="" className="choose_img" />
                    <div className="container">
                    <div className="choose_us_text">
                    <h5 className="choose_us_line">Why <span style={{color:"#FF9900"}}>Choose</span> Us?<i class="fas fa-chevron-double-right choose_us_right_arrow"></i></h5>  
                    </div>
                    

                    <div className="chooser-us-feature">
                
                    <div class="row">
                <div class="col-md-6">
                  <div class="service-1">
                  <i class="fal fa-bullseye-arrow"></i>
                    <h3>No Challenge, No Profit Target</h3>
                    <p>While others give you absurd profit targets or challenges to get a real funded account, Funded Next gives you the freedom to get a real funded account from the beginning without any difficult process or target.</p>
                  </div>
                </div>
                <div class="col-md-6 td">
                  <div class="service-1">
                  <i class="fas fa-chart-pie-alt"></i>
                    <h3>Profit Share </h3>
                    <p>We reward our funded traders for their hard work and good performance. You can get more profit share as you progress through our funded trader program. It's a win/win partnership. You can get profit share from the beginning, or from your first trade.</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="service-1">
                  <i class="fas fa-sack-dollar"></i>
                    <h3>Instant Funding</h3>
                    <p>With Funded Next, you can get access to your real funded account from day 1. You don’t need to pass any difficult evaluation process to start trading with a real funded account.</p>
                  </div>
                </div>
                <div class="col-md-6 td">
                  <div class="service-1">
                  <i class="fas fa-headset"></i>
                    <h3>Dedicated Support Agent</h3>
                    <p>To help you in your trading journey and make the full out of your real funded account, one our support will be assigned for you 24/7 to guide you through.</p>
                  </div>
                </div>

                <div class="col-md-6 td">
                  <div class="service-1">
                  <i class="fas fa-signal-alt-3"></i>
                    <h3>Best Trading Condition</h3>
                    <p>Our funded trader program provides a wide choice of assets with very low commissions and super-raw spreads. Ideal for traders who dema-
                    nd the best execution quality.</p>
                  </div>
                </div>

                <div class="col-md-6 td">
                  <div class="service-1">
                    <i class="fal fa-lightbulb"></i>
                    <h3>No limit on Trading Style</h3>
                    <p>Use any trading strategy, style with no limits or restrictions. We allow you to trade the news, hedge positions or you can use your own EAs.</p>
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

export default ChooseUs;