import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ButtonList from './components/ButtonList'
import SpedycjaPage from "./pages/SpedycjaPage";
import TransportPage from './pages/TransportPage';
import Sidebar from './components/Sidebar';
import TrzyPage from './pages/TrzyPage';
import CzteryPage from './pages/CzteryPage';
import PiecPage from './pages/PiecPage';
import Contact from './components/Contact';

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
                <Route path="/trzy" element={<TrzyPage />} />
                <Route path="/cztery" element={<CzteryPage />} />
                <Route path="/piec" element={<PiecPage />} />
              </Routes>
              <Contact/>
            </Router>
          </>
  )
}

export default App
