import React from 'react';
import '../styles/RaidLogs.css';

const RaidLogs: React.FC = () => {
  return (
    <div className="raid-logs-container">
      <h2 className="logs-title">Raid Logs</h2>
      <div className="logs-subtitle">Chronicles of Our Conquests</div>

      <div className="logs-filter">
        <button className="filter-btn active">All Raids</button>
        <button className="filter-btn">KvK Battles</button>
        <button className="filter-btn">Alliance Wars</button>
        <button className="filter-btn">Territory Control</button>
      </div>

      <div className="logs-timeline">
        <div className="timeline-item">
          <div className="timeline-date">20 Feb 2025</div>
          <div className="timeline-content">
            <h3>Kingdom 1937 vs Kingdom 1942</h3>
            <div className="battle-stats">
              <div className="stat">
                <span className="label">Victory Points:</span>
                <span className="value">1.2M</span>
              </div>
              <div className="stat">
                <span className="label">Troops Lost:</span>
                <span className="value">800K</span>
              </div>
              <div className="stat">
                <span className="label">Resources Plundered:</span>
                <span className="value">15M</span>
              </div>
            </div>
            <p className="battle-description">
              Led successful assault on enemy fortress. Captured 3 strategic passes and maintained control for 48 hours.
            </p>
            <div className="battle-highlights">
              <div className="highlight">
                <span className="highlight-icon">⚔️</span>
                <span>MVP: BlackBeard - 300K troops defeated</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🏰</span>
                <span>First to breach enemy walls</span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">15 Feb 2025</div>
          <div className="timeline-content">
            <h3>Alliance Territory Defense</h3>
            <div className="battle-stats">
              <div className="stat">
                <span className="label">Attacks Repelled:</span>
                <span className="value">24</span>
              </div>
              <div className="stat">
                <span className="label">Territory Held:</span>
                <span className="value">100%</span>
              </div>
            </div>
            <p className="battle-description">
              Successfully defended our territory against coordinated attacks from rival alliances.
            </p>
            <div className="battle-highlights">
              <div className="highlight">
                <span className="highlight-icon">🛡️</span>
                <span>Zero territory lost</span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">10 Feb 2025</div>
          <div className="timeline-content">
            <h3>Resource Node Conquest</h3>
            <div className="battle-stats">
              <div className="stat">
                <span className="label">Nodes Captured:</span>
                <span className="value">15</span>
              </div>
              <div className="stat">
                <span className="label">Resource Gain:</span>
                <span className="value">25M/hr</span>
              </div>
            </div>
            <p className="battle-description">
              Coordinated operation to secure high-level resource nodes in contested territory.
            </p>
            <div className="battle-highlights">
              <div className="highlight">
                <span className="highlight-icon">💎</span>
                <span>Secured rare crystal mine</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logs-navigation">
        <button className="nav-btn">Previous</button>
        <div className="page-indicator">Page 1 of 5</div>
        <button className="nav-btn">Next</button>
      </div>
    </div>
  );
};

export default RaidLogs;
