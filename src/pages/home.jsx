import React, { useState } from 'react';
import '../stylesheets/styles.css';

function Home() {
  const [nombre, setNombre] = useState('');
  
  const handleSolicitarClick = () => {
    window.location.href = `/servicio?nombre=${nombre}&accion=solicitar`;
  };

  const handleOfrecerClick = () => {
    window.location.href = `/servicio?nombre=${nombre}&accion=ofrecer`;
  };

  return (
    <div className="container">
      <h1>Red de Servicios</h1>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <br />
      <button className="myButton" onClick={handleSolicitarClick}>
        Solicitar Servicio
      </button>
      <br />
      <br />
      <button className="myButton" onClick={handleOfrecerClick}>
        Ofrecer Servicio
      </button>
    </div>
  );
}

export default Home;
