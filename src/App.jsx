import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ButtonList from './components/ButtonList'
import SpedycjaPage from "./pages/SpedycjaPage";
import TransportPage from './pages/TransportPage';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (<>
            <Router>
              <Navbar />
              <Sidebar />
              <Routes>
                <Route path="/" element={<ButtonList />} />
                <Route path="/spedycja" element={<SpedycjaPage />} />
                <Route path="/transport" element={<TransportPage />} />
              </Routes>
            </Router>
          </>
  )
}

export default App
