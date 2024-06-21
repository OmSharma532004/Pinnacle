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
import Footer2 from "../components/HomePage/Footer2";
import Resources from "../components/HomePage/Resources";

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
            <div id="resources" className="w-full">
                <Resources/>
            </div>
           
            <div id="service-highlights" className="w-full">
                <ServiceHighlights/>
            </div>
            <div id="footer" className="w-full">
                <Footer/>
            </div>
            {/* <div id="footer" className="w-full">
                <Footer2/>
            </div> */}
            <div className="w-full mt-4">
                <WhatsAppButton /> {/* Add the WhatsAppButton component here */}
            </div>
            {/* Add Disclaimer at End */}
            <div className="w-[80%] text-sm text-center">
                <p className="md:text-lg">
                Disclaimer : -

Buildworx endeavors to ensure that the information and data in this section is correct and complete, but does not accept liability for any error made or omission from this section. Buildworx shall not be liable for any claims or losses of any nature, arising directly or indirectly from use of the information or data on this section or unauthorized access to this section or otherwise howsoever arising, except to the extent required by law.
                 </p>
                </div>
        </div>
    );
};

export default Home;
