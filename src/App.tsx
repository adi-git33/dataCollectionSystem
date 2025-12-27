import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div id="wrapper">
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

    </div>
  )
}

export default App
