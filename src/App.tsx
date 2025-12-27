import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header';
// import { useLocation, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    </>
  )
}

export default App
