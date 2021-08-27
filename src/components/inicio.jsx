import React from 'react';

function Inicio() {

fetch('http://localhost:5000/getData')
.then(response => response.json())
.then(data => console.log(data))

  
    return (
      <div className="Inicio">
        <h1>Califica tu comic favorito</h1>
      </div>
    );
  }
  
  export default Inicio;