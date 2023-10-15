import React, { useEffect } from 'react';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';

function SeleccionarServicio() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get('nombre');
    const accion = params.get('accion');

    const nombreUsuarioSpan = document.getElementById('nombre-usuario');
    const accionSpan = document.getElementById('accion');

    nombreUsuarioSpan.textContent = nombreUsuario;
    accionSpan.textContent = accion === 'solicitar' ? 'solicitando' : 'ofreciendo';

    const jardineriaLink = document.getElementById('jardineria-link');
    const gasfiteriaLink = document.getElementById('gasfiteria-link');

    jardineriaLink.href = `/formulario?nombre=${nombreUsuario}&accion=${accion}&servicio=Jardineria`;
    gasfiteriaLink.href = `/formulario?nombre=${nombreUsuario}&accion=${accion}&servicio=Gasfiteria`;
  }, []);

  return (    <div className='AppBar'><Navbar/>
    <div className="container">
      <h1>Red de Servicios</h1>
      <h2>¡Hola, <span id="nombre-usuario"></span>!</h2>
      <p>Estás <span id="accion"></span> un servicio</p>
      <p>Selecciona el tipo de servicio:</p>
      <a href="#" id="jardineria-link">
        <button className="myButton" id="jardineria">
          Jardinería
        </button>
      </a>
      <a href="#" id="gasfiteria-link">
        <button className="myButton" id="gasfiteria">
          Gasfitería
        </button>
      </a>
    </div></div>
  );
}

export default SeleccionarServicio;