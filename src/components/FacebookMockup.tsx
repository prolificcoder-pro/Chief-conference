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
              <div className="fb-iframe-wrapper">
                <iframe
                  src="/linkedin-profile.html"
                  title="LinkedIn Page"
                  scrolling="yes"
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
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
