import React, { useEffect } from 'react';
import '../stylesheets/styles.css';
import okImage from '../assets/ok.png';


function ConfirmacionSolicitud() {
  useEffect(() => {
    // Obtener los valores de la URL
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre');
    const servicio = params.get('servicio');
    const fecha = params.get('fecha');
    const hora = params.get('hora');
    const accion = params.get('accion');

    const accionConfirmacion = accion === 'solicitar' ? 'Solicitando Servicio' : 'Ofreciendo Servicio';

    // Actualizar los elementos HTML con los valores
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('servicio').textContent = servicio;
    document.getElementById('fecha').textContent = fecha;
    document.getElementById('hora').textContent = hora;
    document.getElementById('accion').textContent = accionConfirmacion;
  }, []);

  return (
    <div className="container">
      <h1>Red de Servicios</h1>
      <h2>Detalles de la solicitud confirmada:</h2>
      <p>
        <strong>Nombre:</strong> <span id="nombre"></span>
      </p>
      <p>
        <strong>Servicio:</strong> <span id="servicio"></span>
      </p>
      <p>
        <strong>Fecha:</strong> <span id="fecha"></span>
      </p>
      <p>
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
    </div>
  );
}

export default ConfirmacionSolicitud;
