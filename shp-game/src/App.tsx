import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import JoinCrew from './components/JoinCrew'
import ViewSpoils from './components/ViewSpoils'
import PirateCode from './components/PirateCode'
import BattleVideos from './components/BattleVideos'
import TheCaptains from './components/TheCaptains'
import OurHistory from './components/OurHistory'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/join" element={<JoinCrew />} />
          <Route path="/spoils" element={<ViewSpoils />} />
          <Route path="/pirate-code" element={<PirateCode />} />
          <Route path="/battle-videos" element={<BattleVideos />} />
          <Route path="/captains" element={<TheCaptains />} />
          <Route path="/history" element={<OurHistory />} />
          <Route path="/hall-of-fame" element={<div className="page-container">Honourable Room</div>} />
          <Route path="/hall-of-fame/legends" element={<div className="page-container">Legends</div>} />
          <Route path="/hall-of-fame/heroes" element={<div className="page-container">Heroes</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
