import React, { useState, CSSProperties } from 'react';
import '../stylesheets/styles.css';
import { AppBar } from '@mui/material';
import Navbar from '../components/Appbar';

import BeatLoader from "react-spinners/BeatLoader";

function Home() {
  const [nombre, setNombre] = useState('');
  
  const handleSolicitarClick = () => {
    window.location.href = `/servicio?nombre=${nombre}&accion=solicitar`;
  };

  const handleOfrecerClick = () => {
    window.location.href = `/servicio?nombre=${nombre}&accion=ofrecer`;
  };

  const handleCalificarClick = () => {
    window.location.href = `/calificar?nombre=${nombre}`;
  };

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    
    <div className='AppBar'><Navbar/>
    <div className="container">
      <h1>Bienvenido a Red de Servicios</h1>
      <label htmlFor="nombre">Ingresa tu nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button className="myButton" onClick={handleSolicitarClick}>
        Solicitar Servicio
      </button>
      <br />
      <button className="myButton" onClick={handleOfrecerClick}>
        Ofrecer Servicio
      </button>
      <button className="myButton" onClick={handleCalificarClick}>
        Calificar Servicio
      </button>

      <BeatLoader color="#36d7b7" />

      </div>
      </div>
  );
}

export default Home;
