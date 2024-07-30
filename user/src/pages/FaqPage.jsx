import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/HomePage/Footer';

const faqs = [
  {
    question: "What types of projects does BuildWorX specialize in?",
    answer: "BuildWorX specializes in residential, commercial, PSU, and enterprise-scale projects, offering comprehensive solutions for each."
  },
  {
    question: "How can I request a quote for my project?",
    answer: "You can request a quote by visiting our website and filling out the quote request form or by contacting our sales team directly via phone or email. The hotline number is 99588-27250."
  },
  {
    question: "What is the typical timeline for completing a residential project?",
    answer: "The timeline varies depending on the project's size, its complexity, and the client’s requirements, but we typically complete residential projects within 6-12 months."
  },
  {
    question: "Do you offer design and architecture services?",
    answer: "Yes, we provide integrated design and architecture services to ensure seamless project execution from start to finish."
  },
  {
    question: "What kind of materials do you use in construction?",
    answer: "We use high-quality sustainable materials that meet industry standards and client specifications to ensure durability and safety."
  },
  {
    question: "Can you handle large-scale commercial projects?",
    answer: "Absolutely, we have extensive experience and the necessary resources to manage and execute large-scale commercial projects efficiently."
  },
  {
    question: "What is your process for project management?",
    answer: "Our project management process includes initial consultation, detailed planning, regular progress updates, quality control, and final inspections."
  },
  {
    question: "How do you ensure quality control during construction?",
    answer: "We implement strict quality control measures, including regular site inspections, adherence to best practices, and use of high-quality materials."
  },
  {
    question: "What are your safety protocols on construction sites?",
    answer: "We adhere to stringent safety protocols, including regular safety training for workers, use of protective gear, and compliance with local safety regulations."
  },
  {
    question: "Do you provide sustainable building solutions?",
    answer: "Yes, we offer sustainable building solutions that incorporate energy-efficient designs, eco-friendly materials, and sustainable construction practices."
  },
  {
    question: "How do you handle changes or modifications during a project?",
    answer: "Every project goes through an initial approval process from the Government agencies. Generally, major changes, if required, have to be made at the agency end as well. We handle changes through a structured change management process, ensuring that all modifications are documented, approved, and integrated smoothly into the project plan."
  },
  {
    question: "What types of financing options are available for clients?",
    answer: "Every project has its own financial requirements. We offer various financing options, including partnerships with financial institutions, to help clients manage project costs effectively."
  },
  {
    question: "Can you provide case studies of past projects?",
    answer: "Yes, we can provide detailed case studies showcasing our past projects upon request."
  },
  {
    question: "What is your warranty or guarantee policy on completed projects?",
    answer: "We offer a warranty on our workmanship and building materials, ensuring that any issues are promptly addressed post-construction."
  },
  {
    question: "Do you assist with obtaining necessary permits and approvals?",
    answer: "Yes, we assist clients in obtaining all necessary permits and approvals required for the construction process."
  },
  {
    question: "How do you handle project delays or unforeseen issues?",
    answer: "We proactively manage project delays by identifying potential risks early, implementing mitigation strategies, and maintaining transparent communication with clients."
  },
  {
    question: "What is your policy on subcontracting work?",
    answer: "We work with a network of vetted and reliable subcontractors, ensuring that all work meets our high standards of quality and safety. The client is proactively informed and engaged with the knowledge of every subcontractor who is engaged at the site."
  },
  {
    question: "How can I track the progress of my construction project?",
    answer: "Clients get regular updates (almost on an everyday basis) around the progress of their project without fail."
  },
  {
    question: "Do you offer maintenance and repair services post-construction?",
    answer: "Yes, we provide ongoing maintenance and repair services to ensure the longevity and optimal performance of our completed projects. We also have an annual site maintenance contract for certain sites which are constructed in phases. Please contact us for details around the same."
  },
  {
    question: "How do you ensure compliance with local building codes and regulations?",
    answer: "We ensure compliance by staying updated with local building codes and regulations, obtaining necessary permits, and conducting regular inspections."
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 mt-[100px]">
        <header className="bg-purple-200 font-light w-full max-w-6xl rounded-lg flex flex-col items-start gap-5 justify-center p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="md:text-5xl lg:text-5xl text-3xl font-light text-purple-900">FAQs</h1>
          </div>
        </header>

        <section className="bg-white font-light flex flex-col mb-[20px] w-full max-w-6xl items-center justify-center rounded-lg p-6">
          <div className="flex items-start gap-[10px] justify-center flex-col flex-wrap w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="flex items-start justify-start flex-col w-full mb-4">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left text-lg text-purple-900 bg-purple-100 p-4 rounded-lg focus:outline-none transition-all duration-300"
                >
                  {faq.question}
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-lg text-gray-700 p-4 bg-purple-50 rounded-lg transition-all duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;
