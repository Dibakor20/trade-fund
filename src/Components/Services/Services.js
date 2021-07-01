import React from 'react';
import './Services.css'
import service_img from '../../assets/images/Group.png'

const Services = () => {
    return (
        <>
            <div className="service_section">
                <div className="service_background">
                    <img src={service_img} alt=""  className="service_img"/>
                <div className="service_text container ">
                    <h5 className="service_line">How It<br/> <span style={{color:"#FF9900"}}>Works?</span><i class="fas fa-chevron-double-right right_arrow"></i></h5>  
                </div>
                    <div className="container">
                   <div className="d-flex text-white justify-content-center">
                       <div className="step_1">
                           <div className="row">
                                <div className="col-lg-2 service_one">
                                    01
                                </div>
                                <div className="col-lg-10">
                                    <p style={{fontSize:"22px"}}>Join Our Funded Program</p>
                                </div>
                           </div>

                       </div>
                       <div className="step_2">
                       
                       <div className="row">
                                <div className="col-lg-2 service_one">
                                    01
                                </div>
                                <div className="col-lg-10">
                                    <p style={{fontSize:"22px"}}>Join Our Funded Program</p>
                                </div>
                           </div>

                      </div> 
                      <div className="step_3">
                      
                      <div className="row">
                                <div className="col-lg-2 service_one">
                                    01
                                </div>
                                <div className="col-lg-10">
                                    <p style={{fontSize:"22px"}}>Join Our Funded Program</p>
                                </div>
                           </div>

                       </div>
                       <div className="step_4">

                       <div className="row">
                                <div className="col-lg-2 service_one">
                                    01
                                </div>
                                <div className="col-lg-10">
                                    <p style={{fontSize:"22px"}}>Join Our Funded Program</p>
                                </div>
                           </div>

                       </div>
                       <div className="step_5">
                      
                       <div className="row">
                                <div className="col-lg-2 service_one">
                                    01
                                </div>
                                <div className="col-lg-10">
                                    <p style={{fontSize:"22px"}}>Join Our Funded Program</p>
                                </div>
                           </div>

                       </div>
                       <div className=" step_6">

                       <div className="row">
                                <div className="col-lg-2 service_one">
                                    01
                                </div>
                                <div className="col-lg-10">
                                    <p style={{fontSize:"22px"}}>Join Our Funded Program</p>
                                </div>
                           </div>

                       </div>
                       <div className="step_7">

                       <div className="row">
                                <div className="col-lg-2 service_one">
                                    01
                                </div>
                                <div className="col-lg-10">
                                    <p style={{fontSize:"22px"}}>Join Our Funded Program</p>
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

export default Services;