import React from 'react';
import './HomePage.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Pricing from '../Pricing/Pricing';
import MobileApp from '../MobileApp/MobileApp';
import ChooseUs from '../ChooseUs/ChooseUs';
import SuccessStory from '../SuccessStory/SuccessStory';
import PaymentGateway from '../PaymentGateway/PaymentGateway';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <>
             <Header/>
         <div className="header_background">
             <Navbar/>
             <Hero/>
         </div>
         <AboutUs/>
         <Services/>
         <Pricing/>
         <MobileApp/>
         <ChooseUs/>
         <SuccessStory/>
         <PaymentGateway/>
         <Footer/>


             

        </>
    );
};

export default HomePage;