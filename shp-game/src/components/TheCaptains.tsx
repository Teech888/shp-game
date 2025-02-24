import React from 'react';
import '../styles/TheCaptains.css';

const TheCaptains: React.FC = () => {
  return (
    <div className="captains-container">
      <h2 className="captains-title">Steel Hell Council</h2>
      <div className="captains-subtitle">Leadership Council of Steel Hell Pirates</div>

      <div className="council-grid">
        {/* Diplomacy */}
        <div className="council-section">
          <h3 className="council-section-title">Diplomatic Corps</h3>
          <div className="council-members">
            <div className="captain-card">
              <div className="captain-banner">Chief Ambassador</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">🤝</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Alliances</span>
                    <span className="value">25+</span>
                  </div>
                </div>
                <div className="captain-description">
                  Lead diplomat for inter-kingdom relations
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Alliance Coordinator</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">📜</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Relations</span>
                    <span className="value">15+</span>
                  </div>
                </div>
                <div className="captain-description">
                  Maintains diplomatic partnerships
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment */}
        <div className="council-section">
          <h3 className="council-section-title">Recruitment Division</h3>
          <div className="council-members">
            <div className="captain-card">
              <div className="captain-banner">Recruitment Lead</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">👥</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Recruits</span>
                    <span className="value">100+</span>
                  </div>
                </div>
                <div className="captain-description">
                  Head of alliance recruitment
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Integration Specialist</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">📋</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Training</span>
                    <span className="value">A+</span>
                  </div>
                </div>
                <div className="captain-description">
                  New member orientation and training
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development */}
        <div className="council-section">
          <h3 className="council-section-title">Player Development</h3>
          <div className="council-members">
            <div className="captain-card">
              <div className="captain-banner">Combat Instructor</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">⚔️</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Power</span>
                    <span className="value">180M</span>
                  </div>
                </div>
                <div className="captain-description">
                  Combat training and strategy development
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Growth Advisor</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">📈</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Growth</span>
                    <span className="value">200%</span>
                  </div>
                </div>
                <div className="captain-description">
                  Player development and optimization
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Military Command */}
        <div className="council-section">
          <h3 className="council-section-title">Military Command</h3>
          <div className="council-members">
            <div className="captain-card">
              <div className="captain-banner">Supreme Commander</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">⚔️</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Victories</span>
                    <span className="value">500+</span>
                  </div>
                </div>
                <div className="captain-description">
                  Alliance military operations leader
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Tactical Commander</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">🎯</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">KvK</span>
                    <span className="value">12</span>
                  </div>
                </div>
                <div className="captain-description">
                  Battle strategy and coordination
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Defense Strategist</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">🛡️</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Defense</span>
                    <span className="value">95%</span>
                  </div>
                </div>
                <div className="captain-description">
                  Territory defense and fortification
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="council-section">
          <h3 className="council-section-title">Event Management</h3>
          <div className="council-members">
            <div className="captain-card">
              <div className="captain-banner">Event Director</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">🎉</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Events</span>
                    <span className="value">50+</span>
                  </div>
                </div>
                <div className="captain-description">
                  Alliance events and activities
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Rewards Manager</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">🏆</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Rewards</span>
                    <span className="value">1M+</span>
                  </div>
                </div>
                <div className="captain-description">
                  Event rewards and distribution
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="council-section">
          <h3 className="council-section-title">Strategic Analytics</h3>
          <div className="council-members">
            <div className="captain-card">
              <div className="captain-banner">Lead Analyst</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">📊</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Reports</span>
                    <span className="value">1K+</span>
                  </div>
                </div>
                <div className="captain-description">
                  Performance analytics and metrics
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Intelligence Officer</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">🔍</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Intel</span>
                    <span className="value">High</span>
                  </div>
                </div>
                <div className="captain-description">
                  Strategic intelligence gathering
                </div>
              </div>
            </div>
            <div className="captain-card">
              <div className="captain-banner">Records Keeper</div>
              <div className="captain-photo"></div>
              <div className="captain-avatar">📑</div>
              <div className="captain-info">
                <h3>Name Here</h3>
                <div className="captain-stats">
                  <div className="stat">
                    <span className="label">Records</span>
                    <span className="value">∞</span>
                  </div>
                </div>
                <div className="captain-description">
                  Battle records and documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCaptains;
