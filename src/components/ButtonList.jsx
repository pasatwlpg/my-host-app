// import React from "react";
// import "../assets/styles/ButtonList.css";
// import { useNavigate } from "react-router-dom";

// function ButtonList() {
//   const navigate = useNavigate();

//   function changePageSpedycja() {
//     navigate("/spedycja"); 
//   }

//   function changePageTransport() {
//     navigate("/transport"); 
//   }


//   return (
//     <div className="button-list-container">
//       <button className="przycisk" onClick={changePageSpedycja}>Spedycja</button>
//       <button className="przycisk" onClick={changePageTransport}>Transport</button>
//     </div>
//   );
// }

// export default ButtonList;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/ButtonList.css"; 
import ciezarowka from '../assets/ciezarowka.jpg';

function ButtonList() {
  const navigate = useNavigate(); 
  
  const buttons = [
    { id: 'spedycja', label: 'Spedycja', path: '/spedycja', img: ciezarowka },
    { id: 'transport', label: 'Transport', path: '/transport' },
    { id: 'trzy', label: 'Trzy', path: '/trzy' },
    { id: 'cztery', label: 'Cztery', path: '/cztery' },
    { id: 'piec', label: 'Piec', path: '/piec' },

  ];

  
  function handleButtonClick(path) {
    navigate(path); 
  }

  return (
    <div className="button-list-container">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="przycisk"
          onClick={() => handleButtonClick(button.path)} 
        >
          {button.img && <img src={button.img} alt={button.label} className="przycisk-img"/> }
          <span className="przycisk-label">{button.label}</span> 
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
