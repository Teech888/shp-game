import React from 'react';
import '../styles/JoinRaid.css';

const JoinRaid: React.FC = () => {
  return (
    <div className="join-raid-container">
      <h2 className="raid-title">Join Our Ranks</h2>
      
      <div className="requirements-section">
        <h3>Requirements</h3>
        <ul className="requirements-list">
          <li>🏰 Castle Level: 25+</li>
          <li>⚔️ Power Level: 10M+</li>
          <li>🎯 T4 Troops Unlocked</li>
          <li>🗣️ Discord Required</li>
          <li>👥 Active Daily Participation</li>
        </ul>
      </div>

      <form className="recruitment-form">
        <div className="form-group">
          <label>In-Game Name</label>
          <input type="text" placeholder="Your game username" />
        </div>
        
        <div className="form-group">
          <label>Power Level</label>
          <input type="number" placeholder="Your current power" />
        </div>
        
        <div className="form-group">
          <label>Castle Level</label>
          <input type="number" placeholder="Your castle level" />
        </div>
        
        <div className="form-group">
          <label>Kingdom</label>
          <input type="text" placeholder="Your current kingdom" />
        </div>
        
        <div className="form-group">
          <label>Discord Username</label>
          <input type="text" placeholder="Your Discord tag" />
        </div>
        
        <div className="form-group">
          <label>Why do you want to join?</label>
          <textarea placeholder="Tell us about yourself and your goals"></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>

      <div className="contact-info">
        <h3>Direct Contact</h3>
        <p>Join our Discord: <a href="#">discord.gg/steelhellpirates</a></p>
        <p>Contact R4: @CaptainSteel</p>
      </div>
    </div>
  );
};

export default JoinRaid;
