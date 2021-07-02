import React from 'react';
import './pricing.css'
import currency from '../../assets/images/Group 9812.png'

const Pricing = () => {
    return (
        <>
            <div className="pricing_section">
                <div className="pricing_text pt-5 container">
                    <div className="pricing_line"><i class="fas fa-chevron-double-left pricing_left_arrow"></i> <i class="fas fa-chevron-double-right pricing_right_arrow"></i></div>
                    <div className="pricing_circle"> <i class="fas fa-circle pricing_circle"></i></div>
                    <h3>Choose the most suitable <span style={{color:"#FF9900"}}>Funding <br/>Package</span> for you</h3>
                </div>
                <div className="pricing_background">
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-lg-4 pricing_card1 col-md-4 col-sm-12">
                                <div class="card text-white header_pricing mb-3">
                                <div class="card-header">
                                
                                 <div className="row">
                                     <div className="col-lg-8 first_card">
                                     <p>Beginner Trader</p>
                                        <h6 className="mt-2">Trading Balance</h6>
                                        <h3>$25,000</h3>
                                     </div>
                                     <div className="col-lg-4">
                                         <img src={currency} alt="" className=" pricing_card_img mt-5" />
                                     </div>
                                 </div>

                                </div>
                                <div class="card-body pricing_body">
                                    <div className="pricing_one">
                                        <p>Joining fee:</p>
                                        <h5 className="mt-1">$199</h5>
                                        <span>(Subscription fee : $100 + 1st Month fee $99)</span>
                                    </div>
                                    <div className="pricing_two mt-4">
                                        <ul>
                                            <li><span style={{color:'#ffffff'}}>Max Daily Loss : 5% = $1250</span></li>
                                            <li><span style={{color:'#ffffff'}}>Max Account Loss : 10% = $2500</span></li>
                                            <li><span style={{color:'#ffffff'}}>Minimum Trading : 1O Days/Month</span></li>
                                        </ul>
                                    </div>
                                    <div className="pricing_three text-center">
                                        <p><span style={{color:'#FF9900', fontSize:"20px"}}>$99</span>/Month</p>
                                        <span>(From 2nd month)</span><br/>
                                        <button className="pricing_button mt-2">Get Funded Now</button>
                                    </div>
                                </div>
                               
                                </div>
                                </div>

                                <div className="col-lg-4 pricing_card2 col-md-4 col-sm-12">
                                 
                                <div class="card text-white header_pricing2 mb-3">
                                <div class="card-header">
                                
                                 <div className="row">
                                     <div className="col-lg-8 first_card">
                                     <p>Confident Trader</p>
                                        <h6 className="mt-2">Trading Balance</h6>
                                        <h3 style={{color:"#414141"}}>$50,000</h3>
                                     </div>
                                     <div className="col-lg-4 mt-2">
                                         <img src={currency} alt="" className="pricing_card_img" /><br/>
                                         <img src={currency} alt="" className="pricing_card_img" />
                                       
                                     </div>
                                 </div>

                                </div>
                                <div class="card-body pricing_body">
                                    <div className="pricing_one">
                                        <p>Joining fee:</p>
                                        <h5 className="mt-1">$399</h5>
                                        <span>(Subscription fee : $200 + 1st Month fee $199)</span>
                                    </div>
                                    <div className="pricing_range mt-4">
                                        <ul>
                                            <li><span style={{color:'#ffffff'}}>Max Daily Loss : 5% = $2500</span></li>
                                            <li><span style={{color:'#ffffff'}}>Max Account Loss : 10% = $5000</span></li>
                                            <li><span style={{color:'#ffffff'}}>Minimum Trading : 1O Days/Month</span></li>
                                        </ul>
                                    </div>
                                    <div className="pricing_three text-center">
                                        <p><span style={{color:'#FF9900',fontSize:"20px"}}>$199</span>/Month</p>
                                        <span>(From 2nd month)</span><br/>
                                        <button className="pricing_button mt-2">Get Funded Now</button>
                                    </div>
                                
                                </div>
                                <div className="pricing_footer"></div>
                                </div>

                                </div>

                                <div className="col-lg-4 pricing_card3 col-md-4 col-sm-12">
                                
                                <div class="card text-white header_pricing mb-3">
                                <div class="card-header">
                                
                                 <div className="row">
                                     <div className="col-lg-8 first_card">
                                     <p>Expert Trader</p>
                                        <h6 className="mt-2">Trading Balance</h6>
                                        <h3>$100,000</h3>
                                     </div>
                                     <div className="col-lg-4">
                                         <img src={currency} alt="" className="pricing_card_img" /><br/>
                                         <img src={currency} alt="" className="pricing_card_img" /><br/>
                                         <img src={currency} alt="" className="pricing_card_img" />
                                     </div>
                                 </div>

                                </div>
                                <div class="card-body pricing_body">
                                    <div className="pricing_one">
                                        <p>Joining fee:</p>
                                        <h5 className="mt-1">$599</h5>
                                        <span>(Subscription fee : $300 + 1st Month fee $299)</span>
                                    </div>
                                    <div className="pricing_range2 mt-4">
                                        <ul>
                                            <li><span style={{color:'#ffffff'}}>Max Daily Loss : 5% = $5000</span></li>
                                            <li><span style={{color:'#ffffff'}}>Max Account Loss : 10% = $10000</span></li>
                                            <li><span style={{color:'#ffffff'}}>Minimum Trading : 1O Days/Month</span></li>
                                        </ul>
                                    </div>
                                    <div className="pricing_three text-center">
                                        <p><span style={{color:'#FF9900',fontSize:"20px"}}>$299</span>/month</p>
                                        <span>(From 2nd month)</span><br/>
                                        <button className="pricing_button mt-2">Get Funded Now</button>
                                    </div>
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

export default Pricing;