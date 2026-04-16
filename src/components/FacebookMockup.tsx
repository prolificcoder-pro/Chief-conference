import React, { useState, useEffect } from 'react';
import './FacebookMockup.css';

const LINKEDIN_URL = "https://www.linkedin.com/company/international-conference-on-applied-linguistics-and-english-language-teaching-learning-ens-rabat?trk=blended-typeahead";

interface FacebookMockupProps {
  className?: string;
}

const FacebookMockup: React.FC<FacebookMockupProps> = ({ 
  className = "" 
}) => {
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes: string | number = now.getMinutes();
      hours = hours % 12;
      hours = hours ? hours : 12; 
      minutes = minutes < 10 ? '0' + minutes : minutes;
      setTime(`${hours}:${minutes}`);
    };
    
    updateClock(); 
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-12 md:py-16 w-full ${className}`}>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Visit our LinkedIn page
        </h2>
        <div className="w-16 h-1 gold-gradient mx-auto rounded-full" />
      </div>

      <div className="mockup-container pt-0">
        {/* Smartphone Structure */}
        <div className="phone-wrapper">
        <div className="hardware-buttons"></div>
        
        <div className="phone-frame">
          <div className="phone-notch"></div>
          
          <div className="phone-screen">
            <div className="status-bar">
              <span className="clock" style={{ marginLeft: '2px' }}>{time}</span>
              <span className="icons" style={{ letterSpacing: '2px' }}>📶🔋</span>
            </div>
            
            <div className="scrollable-content">
              <div className="fb-iframe-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px', background: '#f3f2ef', gap: '16px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <p style={{ textAlign: 'center', fontSize: '13px', color: '#333', fontWeight: 600, margin: 0 }}>International Conference on Applied Linguistics</p>
                <p style={{ textAlign: 'center', fontSize: '11px', color: '#666', margin: 0 }}>ENS Rabat</p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#0A66C2', color: '#fff', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', marginTop: '8px' }}
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FacebookMockup;
