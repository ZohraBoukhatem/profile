import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Resume from './pages/Resume'
import Techstack from './pages/Techstack'
import Homepage from './pages/Homepage'
import Other from './pages/Other'

function App() {
 
  return (

    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/techstack" element={<Techstack/>} />
      <Route path="/other" element={<Other/>} />
    </Routes>
  )
}

export default App
