import React from 'react';
import '../styles/PirateCode.css';

const PirateCode: React.FC = () => {
  return (
    <div className="pirate-code-container">
      <h2 className="code-title">Alliance Rules</h2>
      <div className="code-subtitle">Kingdom 302 Rules and Regulations</div>

      <div className="code-sections">
        <div className="code-section">
          <h3>I. General Rules</h3>
          <div className="rule-group">
            <div className="rule-content">
              <p>Follow the markers and read the emails and commands which leadership issues to you</p>
            </div>
          </div>
        </div>

        <div className="code-section">
          <h3>II. Behaviors and Respect</h3>
          <div className="rule-group">
            <div className="rule-content">
              <ul className="behavior-rules">
                <li>Be respectful, towards all alliance members, allies, and enemies alike, regardless of your feelings towards them.</li>
                <li>We are a team and you must act and speak accordingly. Racism, sexism, toxicity of any kind will not be tolerated.</li>
                <li>You represent our kingdom. Everything you say or do has an effect on future seasons.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="code-section">
          <h3>III. War Rules and Markers</h3>
          <div className="rule-group">
            <h4>Marker Meanings:</h4>
            <ul className="marker-list">
              <li><span className="marker star">⭐</span> Follow this player</li>
              <li><span className="marker heart">❤️</span> Enemy Rally, Don't attack, Move away</li>
              <li><span className="marker shield">🛡️</span> Tanks</li>
              <li><span className="marker target">🎯</span> All focus on target</li>
            </ul>
          </div>

          <div className="rule-group">
            <h4>War Formations:</h4>
            <ul className="formation-list">
              <li><strong>Banana:</strong> Move your march to shape a banana in the indicated space</li>
              <li><strong>Murderball/Ball up/Group Here/Regroup:</strong> Make a tight ball with your marches barely visible</li>
            </ul>
          </div>

          <div className="rule-group">
            <h4>War Rules:</h4>
            <ul className="war-rules">
              <li>Do not AFK in warzone. Must call back your troops when you go offline</li>
              <li>Do not farm in warzone</li>
              <li>If you are afk over night please teleport to a safe distance. Do not go AFK in the front lines during your night</li>
              <li>If you build towers, disable the "Encamp after building" at the tower</li>
              <li>You must disable the attacking "rallied army and darkling legions"</li>
            </ul>
          </div>
        </div>

        <div className="code-section">
          <h3>IV. Teleporting Rules</h3>
          <div className="rule-group">
            <div className="rule-content">
              <p>Please teleport according to the markers. If a marker says T5 close or High T4, It's only for T5 and 100M+ players. Don't allow to teleport others.</p>
            </div>
          </div>
        </div>

        <div className="code-section">
          <h3>V. Merit Requirements</h3>
          <div className="rule-group">
            <div className="rule-content">
              <p>Every season you need to get the required target Merit percentage based on your power level.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PirateCode;
