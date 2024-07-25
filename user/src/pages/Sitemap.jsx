import React from 'react';

const Sitemap = () => {
  return (
    <div className="container mx-auto mt-[100px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Website Sitemap</h1>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>Home (/)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Introduction: "Planning to Build a Home? Build with Us!"</li>
            <li>Button: "Estimate Calculator"</li>
            <li>Resources
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Loans for Construction (/resources/loans-for-construction)</li>
                <li>Packages (/resources/packages)</li>
                <li>Trust and Security (/resources/trust-and-security)</li>
                <li>Interiors (/resources/interiors)</li>
                <li>Architects (/resources/architects)</li>
                <li>Audit Services (/resources/audit-services)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>About Us (/about)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Team Introduction</li>
            <li>Company Vision and Mission</li>
          </ul>
        </li>
        <li>
          <strong>Services (/services)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Subpages
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Construction (/services/construction)</li>
                <li>Consulting (/services/consulting)</li>
              </ul>
            </li>
            <li>Sections
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Residential (/services/residential)</li>
                <li>Commercial (/services/commercial)</li>
                <li>Enterprise / PSU Projects (/services/enterprise-psu-projects)</li>
                <li>Supervision (/services/supervision)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Resources (/resources)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Subpages
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Loans for Construction (/resources/loans-for-construction)</li>
                <li>Packages (/resources/packages)</li>
                <li>Trust and Security (/resources/trust-and-security)</li>
                <li>Interiors (/resources/interiors)</li>
                <li>Architects (/resources/architects)</li>
                <li>Audit Services (/resources/audit-services)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Estimator (/estimator)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Calculator for Estimating Costs</li>
          </ul>
        </li>
        <li>
          <strong>Blogs (/blogs)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Blog Articles on Various Topics</li>
          </ul>
        </li>
        <li>
          <strong>Contact Us (/contact)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Subpages
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Talk to Our Expert (/contact/talk-to-our-expert)</li>
              </ul>
            </li>
            <li>Sections
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Contact Form (Name, Email, Mobile Number, Comment)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Legal (/legal)</strong>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
            <li>Subpages
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Privacy Policy (/legal/privacy-policy)</li>
                <li>Disclaimer (/legal/disclaimer)</li>
                <li>Sitemap (/legal/sitemap)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sitemap;
