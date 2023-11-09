import React, { useState, CSSProperties } from 'react';
import '../stylesheets/styles.css';
import { AppBar } from '@mui/material';
import Navbar from '../components/Appbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
    const [nombre, setNombre] = useState('');
  
    const handleSolicitarClick = () => {
      if (nombre.trim() !== '') {
        window.location.href = `/servicio?nombre=${nombre}&accion=solicitar`;
      } else {
        toast.error('Por favor, ingrese su nombre', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
        });
      }
    };
  
    const handleOfrecerClick = () => {
      if (nombre.trim() !== '') {
        window.location.href = `/servicio?nombre=${nombre}&accion=ofrecer`;
      } else {
        toast.error('Por favor, ingrese su nombre', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
        });
      }
    };
  
    const handleCalificarClick = () => {
      if (nombre.trim() !== '') {
        window.location.href = `/calificar?nombre=${nombre}`;
      } else {
        toast.error('Por favor, ingrese su nombre', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
        });
      }
    };
  
    const handleConfirmarClick = () => {
      if (nombre.trim() !== '') {
        window.location.href = `/confirmar?nombre=${nombre}`;
      } else {
        toast.error('Por favor, ingrese su nombre', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
        });
      }
    };
  
    return (
      <div className='AppBar'>
        <Navbar />
        <div className="container">
          <h1>Bienvenido a Red de Servicios</h1>
          <ToastContainer />
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
          <button className="myButton" onClick={handleCalificarClick}>
            Calificar Servicio
          </button>
          <button className="myButton" onClick={handleOfrecerClick}>
            Ofrecer Servicio
          </button>
          <button className="myButton" onClick={handleConfirmarClick}>
            Revisar Solicitudes
          </button>
        </div>
      </div>
    );
  }

export default Home;
