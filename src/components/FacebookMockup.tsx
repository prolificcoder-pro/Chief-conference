import React, { useState, useEffect } from 'react';
import './FacebookMockup.css';

interface FacebookMockupProps {
  initialUrl?: string;
  className?: string;
}

const FacebookMockup: React.FC<FacebookMockupProps> = ({ 
  initialUrl = "https://www.facebook.com/ens.um5r/",
  className = "" 
}) => {
  const [fbUrl] = useState(initialUrl);
  const [iframeSrc, setIframeSrc] = useState('');
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const encodedUrl = encodeURIComponent(fbUrl);
    setIframeSrc(`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=292&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`);
  }, [fbUrl]);

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
    <div className={`mockup-container ${className}`}>
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
                  src={iframeSrc}
                  scrolling="no" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page Plugin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookMockup;
