
import React from 'react';
import './Services.css'
import service_img from '../../assets/images/Group.png'
import service_img2 from '../../assets/images/Ellipse 117.png'
import service_img3 from '../../assets/images/Vector 62.png'

const Services = () => {
    return (
        <>
            <div className="service_section">
                <div className="service_background">
                    <img src={service_img} alt="" className="service_img" />
                    <img src={service_img2} alt="" className="service_img2" />
                    <img src={service_img3} alt="" className="service_img3" />
                    <i class="fas fa-chevron-down down_arrow"></i>
                    <p className="circle_text text-center">Withdraw Your<br/>Profit Share</p>
                   
                    <div className="service_text container ">
                        <h5 className="service_line">How It<br /> <span style={{ color: "#FF9900" }}>Works?</span><i class="fas fa-chevron-double-right right_arrow"></i></h5>
                    </div>
                    <div className="container">
                        <div className="services_list">
                        <p className="service_text1">No Challenge &<br/> No Demo Trading</p>
                        <p className="service_text2">No Challenge &<br/> No Demo Trading</p>
                        <p className="service_text3">Continue Trading in<br/> a Consistent Way</p>

                        <div  className="row step_1">
                             <p className='p1  s1'>07</p>
                                <p className='p2  s2'>Endless Trading Opportunities</p>
                            </div>

                            <div className="row step_2">
                                <p className='p1 s3'>06</p>
                                <p className='p2 s4'> Become a Certified Funded Next Trader</p>
                            </div>
                            <div  className="row step_3">
                                <p className='p1 s5'>05</p>
                                <p className='p2 s6'>Earn Consistently &<br/> Grow Your Account</p>
                            </div>
                            <div  className="row step_4">
                                <p className='p1 s7'>04</p>
                                <p className='p2 s8'>End of Month</p>
                            </div>
                            <div  className="row step_5">
                                <p className='p1 s9'>03</p>
                                <p className='p2 s10'>Week One of Trading<br/> With Our Funds</p>
                            </div>
                            
                            <div  className="row step_6">
                                <p className='p1 s11'>02</p>
                                <p className='p2 s12'>Start Trading With<br/> Real Funds</p>
                            </div>
                           
                             <div className="row step_7">
                                <p className='p1 s13'>01</p>
                                <p className='p2 s14'>  Join Our Funded<br/> Program</p>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;