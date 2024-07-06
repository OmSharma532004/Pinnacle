import React, { useEffect, useRef, useState } from "react";
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
    const observedElements = useRef(new Set());
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [errors,setErrors] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!observedElements.current.has(entry.target)) {
                            entry.target.classList.add('visible');
                            observedElements.current.add(entry.target);
                        }
                    }

                    // Check visibility of the resources section
                    const resourcesEntry = sectionsRef.current[3];
                    if (resourcesEntry) {
                        if (entry.target === resourcesEntry) {
                            if (entry.isIntersecting) {
                                setShowBackToTop(true);
                            } 
                        }
                    }
                    const ServiceStepsEntry = sectionsRef.current[1];
                    if (ServiceStepsEntry) {
                        if (entry.target === ServiceStepsEntry) {
                            if (entry.isIntersecting) {
                                setShowBackToTop(false);
                            } 
                        }
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
                    <FaArrowAltCircleUp style={{fontSize:"2rem"}} />

                </button>
            )}
        </div>
    );
};

export default Home;
