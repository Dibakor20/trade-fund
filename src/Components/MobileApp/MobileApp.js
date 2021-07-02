import React from 'react';
import './MobileApp.css'
import appStore from '../../assets/images/apps.jpg'
import playStore from '../../assets/images/play-store.jpg'
import app_img from '../../assets/images/Group (1).png'


const MobileApp = () => {
    return (
        <>
            <div className="mobile_app_section">
                <div className="mobile_app_background">
                    <img src={app_img} alt="" className="app_image" />
                    <div className="app_text text-center">
                    <h5 className="pt-5">Download Our <span style={{color:"#FF9900"}}>Mobile App</span></h5>
                    </div>
                    <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-sm-12">
                           
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="get_app">
                                <div className="get_app_text">
                                    <h5>Get The App</h5>
                                    <p className="mt-2">Available On</p>
                                    <div className="app_images mt-3">
                                    <img src={appStore} alt="" className="app_store" />
                                    <img src={playStore} alt="" />
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

export default MobileApp;