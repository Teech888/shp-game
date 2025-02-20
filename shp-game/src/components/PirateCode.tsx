import React from 'react';
import '../styles/PirateCode.css';

const PirateCode: React.FC = () => {
  return (
    <div className="pirate-code-container">
      <h2 className="code-title">The Pirate Code</h2>
      <div className="code-subtitle">"Those who fall behind, get left behind"</div>

      <div className="code-sections">
        <div className="code-section">
          <h3>I. Alliance Rules</h3>
          <ul className="code-list">
            <li>
              <span className="rule-number">1.</span>
              <div className="rule-content">
                <h4>Activity Requirements</h4>
                <p>Minimum 300 activity points daily. Notify leadership if inactive for more than 48 hours.</p>
              </div>
            </li>
            <li>
              <span className="rule-number">2.</span>
              <div className="rule-content">
                <h4>War Participation</h4>
                <p>Mandatory participation in Kingdom vs Kingdom events. Follow war commanders' orders.</p>
              </div>
            </li>
            <li>
              <span className="rule-number">3.</span>
              <div className="rule-content">
                <h4>Resource Contribution</h4>
                <p>Weekly contribution to alliance technology and territory development required.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="code-section">
          <h3>II. Combat Protocol</h3>
          <ul className="code-list">
            <li>
              <span className="rule-number">1.</span>
              <div className="rule-content">
                <h4>Battle Formation</h4>
                <p>Maintain designated formations during group attacks. Support roles must stay in position.</p>
              </div>
            </li>
            <li>
              <span className="rule-number">2.</span>
              <div className="rule-content">
                <h4>Resource Gathering</h4>
                <p>No stealing resources from alliance members. Respect territory boundaries.</p>
              </div>
            </li>
            <li>
              <span className="rule-number">3.</span>
              <div className="rule-content">
                <h4>Reinforcement Duty</h4>
                <p>All members must provide reinforcements when requested during wars.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="code-section">
          <h3>III. Communication</h3>
          <ul className="code-list">
            <li>
              <span className="rule-number">1.</span>
              <div className="rule-content">
                <h4>Discord Presence</h4>
                <p>Maintain active presence in Discord. Important announcements are made there.</p>
              </div>
            </li>
            <li>
              <span className="rule-number">2.</span>
              <div className="rule-content">
                <h4>Respect & Conduct</h4>
                <p>Show respect to all members. Zero tolerance for toxic behavior or harassment.</p>
              </div>
            </li>
            <li>
              <span className="rule-number">3.</span>
              <div className="rule-content">
                <h4>Language</h4>
                <p>English is the primary language for alliance communication.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="code-footer">
        <div className="footer-quote">"Take what you can, give nothing back!"</div>
        <button className="accept-btn">I Accept the Code</button>
      </div>
    </div>
  );
};

export default PirateCode;
