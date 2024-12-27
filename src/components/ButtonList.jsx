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

function ButtonList() {
  const navigate = useNavigate(); 
  
  const buttons = [
    { id: 'spedycja', label: 'Spedycja', path: '/spedycja' },
    { id: 'transport', label: 'Transport', path: '/transport' },
    // Dodaj nowe przyciski w przyszłości w ten sposób:
    // { id: 'nowyPrzycisk', label: 'Nowy Przycisk', path: '/nowa-strona' }
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
          {button.label} 
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
