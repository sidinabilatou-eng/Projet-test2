import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Values from './pages/Values'
import Heritage from './pages/Heritage'
import Action from './pages/Action'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/values" element={<Values />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/action" element={<Action />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </Router>
  )
}

export default App
