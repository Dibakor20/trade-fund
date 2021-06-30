import React from 'react';
import './PaymentGateway.css'
import sliderImage1 from '../../assets/images/download (3).png';
import sliderImage2 from '../../assets/images/skrill_logo 1.png';
import sliderImage3 from '../../assets/images/payoneer-vector-logo-small 1.png';
import sliderImage4 from '../../assets/images/goodbit-fixed_4x 1.png';
import sliderImage5 from '../../assets/images/800x600-coolpay-logo-full-light 1.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);


const sliderImage = [
    { image: sliderImage1 },
    { image: sliderImage2 },
    { image: sliderImage3 },
    { image: sliderImage4 },
    { image: sliderImage5 },
    { image: sliderImage1 },
    { image: sliderImage2 },
    { image: sliderImage3 },

]

const PaymentGateway = () => {
    return (
        <>
            <div className="payment_gateway">
               <div className="container">
                   <div className="payment_gateway_text text-center">
                       <h3>Payout <span style={{color:"#FF9900"}}> Gateways</span></h3>
                   </div>

                   <div className="gateway_slider mt-5">
                   <Swiper slidesPerView={5} spaceBetween={30} freeMode={true} pagination={{
                            "clickable": true
                        }} className="Slider_Container" >
                            {
                                sliderImage.map(image => <SwiperSlide className="Slider_Content"><img src={image.image} alt="" /></SwiperSlide>)
                            }

                        </Swiper>
                   </div>
               </div>
            </div>
        </>
    );
};

export default PaymentGateway;