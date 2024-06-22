import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className=" ">
          {/* Section 1: Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-purple-600">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-purple-600">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:text-purple-600">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-purple-600">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Section 2: Our Services */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Services</h2>
            <p>We offer a range of services across different verticals including construction, renovation, and consulting. Each line of business is tailored to meet our clients' needs with utmost precision and expertise.</p>
          </div>

          {/* Section 3: Footer Bottom */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Legal</h2>
            <ul>
              <li className="mb-2">
                <span>Copyright BuildWorx 2024, all rights reserved</span>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:text-purple-600">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/disclaimer" className="hover:text-purple-600">Disclaimer</a>
              </li>
              <li className="mb-2">
                <a href="/sitemap" className="hover:text-purple-600">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
