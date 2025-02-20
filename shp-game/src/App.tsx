import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import JoinRaid from './components/JoinRaid'
import ViewSpoils from './components/ViewSpoils'
import PirateCode from './components/PirateCode'
import RaidLogs from './components/RaidLogs'
import TheCaptains from './components/TheCaptains'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/join" element={<JoinRaid />} />
        <Route path="/spoils" element={<ViewSpoils />} />
        <Route path="/code" element={<PirateCode />} />
        <Route path="/logs" element={<RaidLogs />} />
        <Route path="/captains" element={<TheCaptains />} />
      </Routes>
    </Router>
  )
}

export default App
