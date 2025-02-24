import React, { useState } from 'react';
import '../styles/BattleVideos.css';

interface VideoCard {
  title: string;
  youtubeId: string;
  streamer: string;
  description: string;
}

interface StreamerSection {
  name: string;
  youtubeChannel: string;
  description: string;
  videos: VideoCard[];
}

const englishStreamer: StreamerSection = {
  name: "Georrge Gaming",
  youtubeChannel: "https://www.youtube.com/@GeorrgeGaming",
  description: "Our official English content creator bringing you the best Free-to-Play Call of Dragons gameplay! Featuring proven F2P strategies, tips, and tricks to enhance your gaming experience. Join our dragon-loving community for the latest updates and guides!",
  videos: [
    {
      title: "Call of Dragons F2P Strategy Guide",
      youtubeId: "video_id_1", // Replace with actual video ID
      streamer: "Georrge Gaming",
      description: "Learn essential Free-to-Play strategies for Call of Dragons, from power gain techniques to effective hero management."
    },
    {
      title: "Epic KvK Battle Highlights",
      youtubeId: "video_id_2", // Replace with actual video ID
      streamer: "Georrge Gaming",
      description: "Watch intense Kingdom vs Kingdom battles and learn tactical insights from our alliance's perspective!"
    }
  ]
};

const vietnameseStreamer: StreamerSection = {
  name: "Vietnamese Streamer Name",
  youtubeChannel: "channel_url_2",
  description: "Người sáng tạo nội dung chính thức của chúng tôi mang đến cho bạn các chiến lược và trận chiến Call of Dragons mới nhất!",
  videos: [
    {
      title: "Trận Chiến KvK Đỉnh Cao",
      youtubeId: "video_id_2",
      streamer: "Vietnamese Streamer Name",
      description: "Những trận chiến khốc liệt từ cuộc chinh phục KvK mới nhất. Xem cách quân đội của chúng tôi thống trị chiến trường!"
    },
    // Add more Vietnamese videos
  ]
};

const translations = {
  title: {
    en: "Battle Chronicles",
    vi: "Biên Niên Sử Chiến Đấu"
  },
  subtitle: {
    en: "Epic Moments from Our Content Creators",
    vi: "Những Khoảnh Khắc Epic Từ Người Sáng Tạo Nội Dung"
  },
  becomeCreator: {
    en: "Want to Create Content?",
    vi: "Bạn Muốn Tạo Nội Dung?"
  },
  creatorMessage: {
    en: "If you're a member of Steel Hell Pirates and create Call of Dragons content, we'd love to feature your videos here!",
    vi: "Nếu bạn là thành viên của Steel Hell Pirates và tạo nội dung Call of Dragons, chúng tôi rất muốn giới thiệu video của bạn tại đây!"
  },
  contact: {
    en: "Contact Leadership",
    vi: "Liên Hệ Ban Lãnh Đạo"
  }
};

const BattleVideos: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'vi'>('en');

  return (
    <div className="videos-container">
      <h1 className="videos-title">{translations.title[currentLanguage]}</h1>
      <div className="videos-subtitle">{translations.subtitle[currentLanguage]}</div>

      {/* English Section */}
      <div className="streamer-section">
        <div className="streamer-header">
          <h2>{currentLanguage === 'en' ? 'English Content' : 'Nội Dung Tiếng Anh'}</h2>
          <div className="streamer-info">
            <img src="https://yt3.googleusercontent.com/default" alt={englishStreamer.name} className="streamer-avatar" />
            <div className="streamer-details">
              <h3>{englishStreamer.name}</h3>
              <p>{englishStreamer.description}</p>
              <a href={englishStreamer.youtubeChannel} target="_blank" rel="noopener noreferrer" className="youtube-link">
                <button className="subscribe-btn">
                  <span className="youtube-icon">▶️</span> {currentLanguage === 'en' ? 'Subscribe' : 'Đăng Ký'}
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="video-grid">
          {englishStreamer.videos.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vietnamese Section */}
      <div className="streamer-section">
        <div className="streamer-header">
          <h2>{currentLanguage === 'en' ? 'Vietnamese Content' : 'Nội Dung Tiếng Việt'}</h2>
          <div className="streamer-info">
            <img src="https://yt3.googleusercontent.com/default" alt={vietnameseStreamer.name} className="streamer-avatar" />
            <div className="streamer-details">
              <h3>{vietnameseStreamer.name}</h3>
              <p>{vietnameseStreamer.description}</p>
              <a href={vietnameseStreamer.youtubeChannel} target="_blank" rel="noopener noreferrer" className="youtube-link">
                <button className="subscribe-btn">
                  <span className="youtube-icon">▶️</span> {currentLanguage === 'en' ? 'Subscribe' : 'Đăng Ký'}
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="video-grid">
          {vietnameseStreamer.videos.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="become-creator">
        <h2>{translations.becomeCreator[currentLanguage]}</h2>
        <p>{translations.creatorMessage[currentLanguage]}</p>
        <button className="contact-btn">{translations.contact[currentLanguage]}</button>
      </div>

      <div className="language-switcher">
        <button 
          className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
          onClick={() => setCurrentLanguage('en')}
        >
          🇺🇸 English
        </button>
        <button 
          className={`lang-btn ${currentLanguage === 'vi' ? 'active' : ''}`}
          onClick={() => setCurrentLanguage('vi')}
        >
          🇻🇳 Tiếng Việt
        </button>
      </div>
    </div>
  );
};

export default BattleVideos;
