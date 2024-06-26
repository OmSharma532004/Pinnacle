import React, { useEffect, useRef } from "react";
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

const Home = () => {
    const sectionsRef = useRef([]);
    const observedElements = useRef(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!observedElements.current.has(entry.target)) {
                            entry.target.classList.add('visible');
                            observedElements.current.add(entry.target);
                        }
                    } else {
                        // Optionally, you can remove the class if not intersecting, but only if it has not been added before
                        // if (!observedElements.current.has(entry.target)) {
                        //     entry.target.classList.remove('visible');
                        // }
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Ensure sectionsRef is populated with valid DOM elements
        const sections = sectionsRef.current.filter(section => section); // Filter out undefined/null elements

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="flex flex-col overflow-hidden  w-full items-center justify-center">
            <div id="hero-section" className="w-full " ref={(el) => sectionsRef.current[0] = el}>
                <HeroSection/>
            </div>
            <div id="section1" className="w-full section" ref={(el) => sectionsRef.current[1] = el}>
                <Section1/>
            </div>
            <div id="service-steps" className="w-full section" ref={(el) => sectionsRef.current[2] = el}>
                <ServiceSteps/>
            </div>
            <div id="resources" className="w-full section" ref={(el) => sectionsRef.current[3] = el}>
                <Resources/>
            </div>
            <div id="service-highlights" className="w-full section" ref={(el) => sectionsRef.current[4] = el}>
                <ServiceHighlights/>
            </div>
            <div id="footer" className="w-full" ref={(el) => sectionsRef.current[5] = el}>
                <Footer/>
            </div>
            <div className="w-full mt-4">
                <WhatsAppButton /> {/* Add the WhatsAppButton component here */}
            </div>
            {/* Add Disclaimer at End */}
        </div>
    );
};

export default Home;
