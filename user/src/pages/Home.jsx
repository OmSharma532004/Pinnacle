import React, { useRef, useState } from "react";
import homeImage from '../images/home.png';
import top from '../images/Top.png';
import design from '../images/design.png';
import arrow from '../images/arrow.png';
import arrow2 from '../images/arrow2.png';
import implementation from '../images/implementation.png';
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
import { FaArrowAltCircleUp } from "react-icons/fa";

const Home = () => {
    const sectionsRef = useRef([]);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const scrollToTop = () => {
        sectionsRef.current[0].scrollIntoView({ behavior: 'smooth' });
        window.scrollBy(0, -10000);
    };

    return (
        <div className="flex flex-col overflow-hidden w-full items-center justify-center">
            <div id="hero-section" className="w-full" ref={(el) => sectionsRef.current[0] = el}>
                <HeroSection />
            </div>
            <div id="section1" className="w-full section" ref={(el) => sectionsRef.current[1] = el}>
                <Section1 />
            </div>
            <div id="service-steps" className="w-full section" ref={(el) => sectionsRef.current[2] = el}>
                <ServiceSteps />
            </div>
            <div id="resources" className="w-full section" ref={(el) => sectionsRef.current[3] = el}>
                <Resources />
            </div>
            <div id="service-highlights" className="w-full section" ref={(el) => sectionsRef.current[4] = el}>
                <ServiceHighlights />
            </div>
            <section className="pb-10 font-light p-5 w-screen">
                <h2 className="text-5xl text-center font-light text-black mb-12">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
                    <div className="bg-white p-8 rounded-lg custom-card">
                        <h3 className="text-xl mb-4 text-purple-800">Ranveer and Ria's Dream Home</h3>
                        <p className="text-gray-700">Ranveer and Ria, a happy old couple, got their dream house constructed by BuildWorX. They wanted a cozy place to spend their golden years with their grandchildren. BuildWorX delivered a perfect home where they now enjoy their retirement, surrounded by the laughter of their grandchildren.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg custom-card">
                        <h3 className="text-xl mb-4 text-purple-800">Yash and Reema's Urban Retreat</h3>
                        <p className="text-gray-700">Yash and Reema, a young couple in the fast-paced city, had no time to oversee the construction of their new home. They entrusted the project to BuildWorX, who managed everything from start to finish. Now, they have a beautiful urban retreat where they can unwind after their busy days.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg custom-card">
                        <h3 className="text-xl mb-4 text-purple-800">Raj's Holiday Home</h3>
                        <p className="text-gray-700">Raj, an NRI residing in the US, dreamed of having a holiday home in Delhi. He outsourced the entire turnkey project to BuildWorX. From planning to execution, BuildWorX handled it all, and now Raj has a perfect getaway spot in India where he can relax during his visits.</p>
                    </div>
                </div>
            </section>
            <div id="footer" className="w-full" ref={(el) => sectionsRef.current[5] = el}>
                <Footer />
            </div>
            <div className="w-full mt-4">
                <WhatsAppButton />
            </div>
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-44 right-5 bg-purple-900 text-white p-2 rounded"
                >
                    <FaArrowAltCircleUp style={{ fontSize: "2rem" }} />
                </button>
            )}
        </div>
    );
};

export default Home;
