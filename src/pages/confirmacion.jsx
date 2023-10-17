import React, { useEffect } from 'react';
import '../stylesheets/styles.css';
import okImage from '../assets/ok.png';
import { display } from '@mui/system';
import Navbar from '../components/Appbar';


function ConfirmacionSolicitud() {
  useEffect(() => {
    // Obtener los valores de la URL
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre');
    const servicio = params.get('servicio');
    const fecha = params.get('fecha');
    const accion = params.get('accion');
    let hora;
    let trabajador;
    if (accion === 'solicitar'){
      hora = params.get('hora');
      document.getElementById('hora').textContent = hora;
      document.getElementById('p_hora').removeAttribute('hidden'); 

      trabajador = params.get('trabajador')
      document.getElementById('trabajador').textContent = trabajador;
      document.getElementById('p_trabajador').removeAttribute('hidden'); 

    }
    
    const accionConfirmacion = accion === 'solicitar' ? 'Solicitando Servicio' : 'Ofreciendo Servicio';
    
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('servicio').textContent = servicio;
    document.getElementById('fecha').textContent = fecha;
    document.getElementById('accion').textContent = accionConfirmacion;


    // Actualizar los elementos HTML con los valores
  }, []);

  return (
    <div className='AppBar'><Navbar/>
    <div className="container">
      <br />
      <h2>Detalles de la solicitud confirmada:</h2>
      <p>
        <strong>Nombre Solicitante:</strong> <span id="nombre"></span>
      </p>
      <div id='p_trabajador' hidden>
      <p>
        <strong>Nombre Trabajador:</strong> <span id="trabajador"></span>
      </p>
      </div>
      <p>
        <strong>Servicio:</strong> <span id="servicio"></span>
      </p>
      <p>
        <strong>Fecha:</strong> <span id="fecha"></span>
      </p>
      <p id="p_hora" hidden>
        <strong>Hora:</strong> <span id="hora"></span>
      </p>
      <p>
        <strong>Acción:</strong> <span id="accion"></span>
      </p>
      <img src={okImage} alt="Confirmación exitosa" width="100" height="100" />
      <p>
        <a href="/">
          <button className="myButton">Volver a inicio</button>
        </a>
      </p>
    </div></div>
  );
}

export default ConfirmacionSolicitud;
