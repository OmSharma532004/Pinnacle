import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = () => (
    <Helmet>
        <title>BuildWorX | Constructing Dreams, Shaping Futures</title>
        <meta name="description" content="Welcome to BuildWorX, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Our ethos is rooted in reliability, professionalism, and a commitment to excellence that sets us apart in the construction industry. Get in touch with our team for project audits and more. Contact us for all your construction projects." />
        <meta name="keywords" content="team, touch, contact, projects, audit" />

        <link rel="canonical" href="https://buildworx.co.in" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="BuildWorX | Constructing Dreams, Shaping Futures" />
        <meta property="og:description" content="Welcome to BuildWorX, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Get in touch with our team for project audits and more. Contact us for all your construction projects." />
        <meta property="og:image" content="https://buildworx.co.in/final-project-image.jpg" />
        <meta property="og:url" content="https://buildworx.co.in" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BuildWorX | Constructing Dreams, Shaping Futures" />
        <meta name="twitter:description" content="Welcome to BuildWorX, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Get in touch with our team for project audits and more. Contact us for all your construction projects." />
        <meta name="twitter:image" content="https://buildworx.co.in/final-project-image.jpg" />
        
        {/* LinkedIn */}
        <meta property="og:title" content="BuildWorX | Constructing Dreams, Shaping Futures" />
        <meta property="og:description" content="Welcome to BuildWorX, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Get in touch with our team for project audits and more. Contact us for all your construction projects." />
        <meta property="og:image" content="https://buildworx.co.in/final-project-image.jpg" />
        <meta property="og:url" content="https://buildworx.co.in" />
        
        {/* Instagram */}
        <meta property="og:title" content="BuildWorX | Constructing Dreams, Shaping Futures" />
        <meta property="og:description" content="Welcome to BuildWorX, where construction isn't just about building structures; it's about constructing dreams and shaping futures. Get in touch with our team for project audits and more. Contact us for all your construction projects." />
        <meta property="og:image" content="https://buildworx.co.in/final-project-image.jpg" />
        <meta property="og:url" content="https://buildworx.co.in" />
        <meta property="og:see_also" content="https://www.instagram.com/buildworx.co.in/?igsh=MWJyZTIxbnZhczg2&utm_source=qr" />
    </Helmet>
);

export default MetaTags;
