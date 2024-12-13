import React, { useState } from 'react';
import { FaPython, FaSlack, FaSpotify, FaGoogle, FaWindows, FaDiscord, FaVk, FaTwitch, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import './Sponse.css';

const SponsorIcons = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
    setTimeout(() => setActive(null), 500); 
  };

  const sponsors = [
    { icon: <FaPython />, name:'Python' },
    { icon: <FaSlack />, name: 'Slack' },
    { icon: <FaSpotify />, name: 'Spotify' },
    { icon: <FaGoogle />, name: 'Google' },
    { icon: <FaWindows />, name: 'Windows' },
    { icon: <FaDiscord />, name: 'Discord' },
    { icon: <FaVk />, name: 'VisKal' },
    { icon: <FaTwitch />, name: 'Twitch' },
    { icon: <SiJavascript />, name: 'Jastip' },
    { icon: <FaReact />, name: 'Company' }
  ];

  return (
    <div className="sponsors-container">
      <h2 className="gh2"></h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`sponsor-icon ${active === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {sponsor.icon}
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorIcons;
