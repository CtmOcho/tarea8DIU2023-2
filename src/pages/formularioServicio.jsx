import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../stylesheets/styles.css';

function FormularioServicio() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [servicio, setServicio] = useState('');
  const [accion, setAccion] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setNombreUsuario(params.get('nombre'));
    setServicio(params.get('servicio'));
    setAccion(params.get('accion'));

    const fechaInput = document.getElementById('fecha');
    const horaInput = document.getElementById('hora');

    flatpickr(fechaInput, {
      enableTime: false,
      dateFormat: 'd/m/Y',
      minDate: 'today',
    });

    const confirmarServicio = () => {
      const fechaSeleccionada = fechaInput.value;
      const horaSeleccionada = horaInput.value;
      const accionConfirmacion = accion === 'solicitar' ? 'Solicitando Servicio' : 'Ofreciendo Servicio';
      const usuario = nombreUsuario;
      const servic = servicio;

      const confirmacion = `Acción: ${accionConfirmacion}\nNombre: ${usuario}\nFecha: ${fechaSeleccionada}\nHora: ${horaSeleccionada}\nServicio: ${servic}`;

      const confirmado = window.confirm(`¿Estás seguro de estos datos?\n\n${confirmacion}`);

      if (confirmado) {
        // Redirige a la página "4.html" con los valores confirmados en la URL
        const url = `/confirmacion?accion=${accion}&nombre=${nombreUsuario}&fecha=${fechaSeleccionada}&hora=${horaSeleccionada}&servicio=${servicio}`;
        window.location.href = url;
      }
    };

    const solicitarBtn = document.getElementById('solicitar');
    solicitarBtn.textContent = accion === 'solicitar' ? 'Confirmar Solicitar Servicio' : 'Confirmar Ofrecer Servicio';
    solicitarBtn.onclick = confirmarServicio;
  }, [accion, nombreUsuario, servicio]);

  return (
    <div className="container">
      <h1>Red de Servicios</h1>
      <h2>¡Hola, {nombreUsuario}!</h2>
      <h2>Servicio seleccionado: {servicio}</h2>
      <div>
        <label htmlFor="fecha">Fecha:</label>
        <input type="date" id="fecha" placeholder="Selecciona una fecha" />
      </div>
      <div>
        <label htmlFor="hora">Hora:</label>
        <input type="time" id="hora" />
      </div>
      <button className="myButton" id="solicitar" ></button>
    </div>
  );
}

export default FormularioServicio;
