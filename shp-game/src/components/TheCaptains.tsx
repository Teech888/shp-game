import React from 'react';
import '../styles/TheCaptains.css';

const TheCaptains: React.FC = () => {
  return (
    <div className="captains-container">
      <h2 className="captains-title">The Captains</h2>
      <div className="captains-subtitle">Leaders of the Steel Hell Pirates</div>

      <div className="leadership-grid">
        <div className="captain-card main-captain">
          <div className="captain-banner">Alliance Leader</div>
          <div className="captain-avatar">👑</div>
          <div className="captain-info">
            <h3>BlackBeard</h3>
            <div className="captain-title">Grand Admiral</div>
            <div className="captain-stats">
              <div className="stat">
                <span className="label">Power</span>
                <span className="value">150M</span>
              </div>
              <div className="stat">
                <span className="label">Victories</span>
                <span className="value">1.2K</span>
              </div>
            </div>
            <div className="captain-description">
              Founder of Steel Hell Pirates. Veteran of 12 KvK battles.
              Specializes in infantry warfare and strategic planning.
            </div>
          </div>
        </div>

        <div className="officers-section">
          <h3>Senior Officers</h3>
          <div className="officers-grid">
            <div className="captain-card">
              <div className="captain-avatar">⚔️</div>
              <div className="captain-info">
                <h3>SteelHeart</h3>
                <div className="captain-title">War Commander</div>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Power</span>
                    <span className="value">145M</span>
                  </div>
                </div>
                <div className="captain-description">
                  Lead tactician for kingdom battles. Expert in cavalry formations.
                </div>
              </div>
            </div>

            <div className="captain-card">
              <div className="captain-avatar">🏰</div>
              <div className="captain-info">
                <h3>IronFist</h3>
                <div className="captain-title">Territory General</div>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Power</span>
                    <span className="value">140M</span>
                  </div>
                </div>
                <div className="captain-description">
                  Manages alliance territory and resource distribution.
                </div>
              </div>
            </div>

            <div className="captain-card">
              <div className="captain-avatar">📜</div>
              <div className="captain-info">
                <h3>StormBringer</h3>
                <div className="captain-title">Diplomatic Officer</div>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Power</span>
                    <span className="value">138M</span>
                  </div>
                </div>
                <div className="captain-description">
                  Handles inter-alliance relations and negotiations.
                </div>
              </div>
            </div>

            <div className="captain-card">
              <div className="captain-avatar">💎</div>
              <div className="captain-info">
                <h3>GoldHand</h3>
                <div className="captain-title">Resource Manager</div>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Power</span>
                    <span className="value">135M</span>
                  </div>
                </div>
                <div className="captain-description">
                  Oversees alliance resources and development projects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h3>Command Chain</h3>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📢</span>
            <span>Discord: Join our server for direct communication</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">⏰</span>
            <span>Office Hours: 20:00-22:00 UTC Daily</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>In-game Mail: Send to [SHP] BlackBeard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCaptains;
