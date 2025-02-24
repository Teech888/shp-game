import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation-container">
      <ul className="nav-links">
        <li>
          <Link to="/pirate-code" className="nav-link">
            <span className="nav-icon">📜</span>
            <span className="nav-text">Pirate Code</span>
          </Link>
        </li>
        <li>
          <Link to="/join" className="nav-link">
            <span className="nav-icon">⚔️</span>
            <span className="nav-text">Join the Crew</span>
          </Link>
        </li>
        <li>
          <Link to="/raid-logs" className="nav-link">
            <span className="nav-icon">📖</span>
            <span className="nav-text">Raid Logs</span>
          </Link>
        </li>
        <li>
          <Link to="/history" className="nav-link">
            <span className="nav-icon">🗺️</span>
            <span className="nav-text">Our History</span>
          </Link>
        </li>
        <li>
          <Link to="/history/our-story" className="nav-link">
            <span className="nav-icon">📚</span>
            <span className="nav-text">Our Story</span>
          </Link>
        </li>
        <li>
          <Link to="/history/notable-events" className="nav-link">
            <span className="nav-icon">📆</span>
            <span className="nav-text">Notable Events</span>
          </Link>
        </li>
        <li>
          <Link to="/hall-of-fame" className="nav-link">
            <span className="nav-icon">👑</span>
            <span className="nav-text">Honourable Room</span>
          </Link>
        </li>
        <li>
          <Link to="/hall-of-fame/legends" className="nav-link">
            <span className="nav-icon">🏆</span>
            <span className="nav-text">Legends</span>
          </Link>
        </li>
        <li>
          <Link to="/hall-of-fame/heroes" className="nav-link">
            <span className="nav-icon">💪</span>
            <span className="nav-text">Heroes</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
