import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="title">STEEL HELL PIRATES</h1>
        <div className="divider"></div>
        <p className="subtitle">Ruthless Raiders of Tamaris</p>
        
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => navigate('/join')}>Join the Crew</button>
          <button className="btn-secondary" onClick={() => navigate('/spoils')}>View Our Spoils</button>
        </div>
        
        <nav className="navigation-menu">
          <Link to="/pirate-code" className="nav-item">
            <div className="nav-icon">📜</div>
            <span>Pirate Code</span>
          </Link>
          <Link to="/battle-videos" className="nav-item">
            <div className="nav-icon">🎬</div>
            <span>Battle Videos</span>
          </Link>
          <Link to="/captains" className="nav-item">
            <div className="nav-icon">👑</div>
            <span>The Captains</span>
          </Link>
          <Link to="/history" className="nav-item">
            <div className="nav-icon">🗺️</div>
            <span>Our History</span>
          </Link>
          <Link to="/hall-of-fame" className="nav-item">
            <div className="nav-icon">🏆</div>
            <span>Honourable Room</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default WelcomePage;
