// src/components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import './CookieConsent.scss'; // Create corresponding CSS file for styling

const CookieConsent = ({ onConsent }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if consent is already given
    const consent = getCookie('cookie-consent');
    if (consent) {
      setVisible(false);
      onConsent(consent);
    }
  }, [onConsent]);

  const setCookie = (name, value, days) => {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const handleConsent = (consentType) => {
    setCookie('cookie-consent', consentType, 365);
    setVisible(false);
    onConsent(consentType);
  };

  return (
    visible ? (
      <div className="cookie-consent">
        <div className="cookie-consent-content">
          <h2>Cookie Consent</h2>
          <p>We use cookies to enhance your experience on our site. Please choose your cookie preferences.</p>
          <button className='bg-white p-4 rounded-xl text-black' onClick={() => handleConsent('all')}>Accept All Cookies</button>
          <button className='bg-white p-4 rounded-xl text-black'  onClick={() => handleConsent('essential')}>Accept Essential Cookies</button>
          <button className='bg-white p-4 rounded-xl text-black'  onClick={() => handleConsent('none')}>Reject Cookies</button>
        </div>
      </div>
    ) : null
  );
};

export default CookieConsent;
