import React from 'react';
import '../styles/ViewSpoils.css';

const ViewSpoils: React.FC = () => {
  return (
    <div className="spoils-container">
      <h2 className="spoils-title">Our Conquests</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Alliance Power</h3>
          <div className="stat-value">2.5B</div>
          <div className="stat-subtitle">Total Power</div>
        </div>
        
        <div className="stat-card">
          <h3>War Record</h3>
          <div className="stat-value">47-3</div>
          <div className="stat-subtitle">Victory Ratio</div>
        </div>
        
        <div className="stat-card">
          <h3>Territory</h3>
          <div className="stat-value">127</div>
          <div className="stat-subtitle">Controlled Zones</div>
        </div>
        
        <div className="stat-card">
          <h3>Rankings</h3>
          <div className="stat-value">#1</div>
          <div className="stat-subtitle">Kingdom Power</div>
        </div>
      </div>

      <div className="achievements-section">
        <h3>Recent Victories</h3>
        <div className="achievement-list">
          <div className="achievement-item">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-details">
              <h4>Kingdom vs Kingdom Victory</h4>
              <p>Conquered 3 passes and held the temple for 48 hours</p>
            </div>
          </div>
          
          <div className="achievement-item">
            <div className="achievement-icon">⚔️</div>
            <div className="achievement-details">
              <h4>Alliance Conquest</h4>
              <p>Successfully defended our territory against 2 alliances</p>
            </div>
          </div>
          
          <div className="achievement-item">
            <div className="achievement-icon">👑</div>
            <div className="achievement-details">
              <h4>Kingdom Unification</h4>
              <p>Led the successful unification of Kingdom 1937</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-players">
        <h3>Top Raiders</h3>
        <div className="player-list">
          <div className="player-card">
            <div className="player-rank">1</div>
            <div className="player-info">
              <h4>BlackBeard</h4>
              <p>Power: 150M</p>
            </div>
          </div>
          
          <div className="player-card">
            <div className="player-rank">2</div>
            <div className="player-info">
              <h4>SteelHeart</h4>
              <p>Power: 145M</p>
            </div>
          </div>
          
          <div className="player-card">
            <div className="player-rank">3</div>
            <div className="player-info">
              <h4>DragonSlayer</h4>
              <p>Power: 140M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSpoils;
