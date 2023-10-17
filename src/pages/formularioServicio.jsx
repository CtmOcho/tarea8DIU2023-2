import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';

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
    const div_hora = document.getElementById("hora_div");

    if (accion === 'ofrecer') {
      div_hora.setAttribute('hidden','true');
    }
    const fechaInput = document.getElementById('fecha');
    const horaInput = document.getElementById('hora');

    flatpickr(fechaInput, {
      enableTime: false,
      dateFormat: 'd/m/Y',
      minDate: 'today',
    });

    const confirmarServicio = () => {
      const fechaSeleccionada = fechaInput.value;
      const accionConfirmacion = accion === 'solicitar' ? 'Solicitando Servicio' : 'Ofreciendo Servicio';
      const usuario = nombreUsuario;
      const servic = servicio;
      let confirmacion;
      let horaSeleccionada;
      if (accion === 'ofrecer') {
         confirmacion = `Nombre: ${usuario}\nFecha: ${fechaSeleccionada}\nServicio: ${servic}\nAcción: ${accionConfirmacion}`;   
      }else{
         horaSeleccionada = horaInput.value;soli
         confirmacion = `Acción: ${accionConfirmacion}\nNombre: ${usuario}\nFecha: ${fechaSeleccionada}\nHora: ${horaSeleccionada}\nServicio: ${servic}`;
      }
      const confirmado = window.confirm(`¿Estás seguro de estos datos?\n\n${confirmacion}`);

      if (confirmado) {
        // Redirige a la página "4.html" con los valores confirmados en la URL
        let url;
        if (accion === 'ofrecer') {
          url = `/confirmacion?accion=${accion}&nombre=${nombreUsuario}&fecha=${fechaSeleccionada}&servicio=${servicio}`;
        }else{

          url = `/confirmacion?accion=${accion}&nombre=${nombreUsuario}&fecha=${fechaSeleccionada}&hora=${horaSeleccionada}&servicio=${servicio}`;
        }
        window.location.href = url;
      }
    };

    const solicitarBtn = document.getElementById('solicitar');
    solicitarBtn.textContent = accion === 'solicitar' ? 'Confirmar Solicitar Servicio' : 'Confirmar Ofrecer Servicio';
    solicitarBtn.onclick = confirmarServicio;
  }, [accion, nombreUsuario, servicio]);

  return (
    <div className='AppBar'><Navbar/>
    <div className="container">
      <br />
      <h2>Servicio seleccionado: {servicio}</h2>
      <div>
        <label htmlFor="fecha">Fecha:</label>
        <input type="date" id="fecha" placeholder="Selecciona una fecha" />
      </div>
      <br />
      <div id="hora_div" >
        <label htmlFor="hora">Hora:</label>
        <input type="time" id="hora" value="24:00"/>
      </div>
      <br />
      <button className="myButton" id="solicitar" ></button>
    </div></div>
  );
}

export default FormularioServicio;
