import React from "react";
import homeImage from '../images/home.png'
import top from '../images/Top.png'
import design from '../images/design.png'
import arrow from '../images/arrow.png'
import arrow2 from '../images/arrow2.png'
import implementation from '../images/implementation.png'
import Navbar from "../components/Navbar";
import Section1 from "../components/HomePage/section1";
import HeroSection from "../components/HomePage/HeroSection";
import ServiceHighlights from "../components/HomePage/Service";
import Section2 from "../components/HomePage/section2";
import ServiceSteps from "../components/HomePage/steps";
import Footer from "../components/HomePage/Footer";
import WhatsAppButton from "../components/HomePage/WhatsAppButton";

const Home = () => {
    return (
        <div className=" flex flex-col overflow-hidden w-full items-center justify-center">
            <div id="hero-section" className="w-full">
                <HeroSection/>
            </div>
            <div id="section1" className="w-full">
                <Section1/>
            </div>
            <div id="service-steps" className="w-full">
                <ServiceSteps/>
            </div>
            <div id="section2" className="w-full">
                <Section2/>
            </div>
            <div id="service-highlights" className="w-full">
                <ServiceHighlights/>
            </div>
            <div id="footer" className="w-full">
                <Footer/>
            </div>
            <div className="w-full mt-4">
                <WhatsAppButton /> {/* Add the WhatsAppButton component here */}
            </div>
        </div>
    );
};

export default Home;
