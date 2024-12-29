import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/Sidebar.css"; 

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); 
  const navigate = useNavigate(); 
  
  const buttons = [
    { id: 'spedycja', label: 'Spedycja', path: '/spedycja' },
    { id: 'transport', label: 'Transport', path: '/transport' },
    { id: 'trzy', label: 'Trzy', path: '/trzy' },
    { id: 'cztery', label: 'Cztery', path: '/cztery' },
    { id: 'piec', label: 'Piec', path: '/piec' },
  ];

  function toggleSidebar() {
    setIsOpen(prev => !prev); 
  }

  function handleButtonClick(path) {
    navigate(path); 
    setIsOpen(false); 
  }

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "Zamknij" : "Menu"}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {buttons.map((button) => (
            <li key={button.id}>
              <button
                className="sidebar-button"
                onClick={() => handleButtonClick(button.path)} 
              >
                {button.label} 
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
