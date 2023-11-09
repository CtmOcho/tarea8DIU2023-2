import React, { useEffect, useState } from 'react';
import '../stylesheets/styles.css';
import okImage from '../assets/ok.png';
import { display } from '@mui/system';
import Navbar from '../components/Appbar';
import LoadingScreen from '../components/loadingScreen';


function formatDateToDDMMYYYY(dateString) {
    const dateParts = dateString.split('-'); // Divide la cadena por guiones
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}/${month}/${year}`;
  }
  

function ConfirmacionSolicitud() {
    useEffect(() => {
        // Obtener los valores de la URL
        const params = new URLSearchParams(window.location.search);
        const servicio = params.get('servicio');
        const fecha = params.get('fecha');
        const accion = params.get('accion');
        let hora;
        let trabajador;
        let cliente;
        let accionConfirmacion;

        if (accion === 'solicitar') {
            cliente = params.get('nombre');
            document.getElementById('cliente').textContent = cliente;
            document.getElementById('p_cliente').removeAttribute('hidden');

            hora = params.get('hora');
            document.getElementById('hora').textContent = hora;
            document.getElementById('p_hora').removeAttribute('hidden');

            trabajador = params.get('trabajador')
            document.getElementById('trabajador').textContent = trabajador;
            document.getElementById('p_trabajador').removeAttribute('hidden');


            accionConfirmacion = "Solicitando Servicio";
            document.getElementById('fecha').textContent = formatDateToDDMMYYYY(fecha); // Formatea la fecha;

        }else if(accion === 'ofrecer'){
            
            trabajador = params.get('nombre')
            document.getElementById('trabajador').textContent = trabajador;
            document.getElementById('p_trabajador').removeAttribute('hidden');

            accionConfirmacion = "Ofreciendo Servicio";
            document.getElementById('fecha').textContent = fecha; // Formatea la fecha;

        }else if(accion === 'confirmado'){

            cliente = params.get('cliente');
            document.getElementById('cliente').textContent = cliente;
            document.getElementById('p_cliente').removeAttribute('hidden');

            hora = params.get('hora');
            document.getElementById('hora').textContent = hora;
            document.getElementById('p_hora').removeAttribute('hidden');

            trabajador = params.get('nombre')
            document.getElementById('trabajador').textContent = trabajador;
            document.getElementById('p_trabajador').removeAttribute('hidden');
            accionConfirmacion = "Confirmando Atención";

            document.getElementById('fecha').textContent = formatDateToDDMMYYYY(fecha); // Formatea la fecha;

        }else if(accion === 'rechazado'){
            cliente = params.get('cliente');
            document.getElementById('cliente').textContent = cliente;
            document.getElementById('p_cliente').removeAttribute('hidden');

            hora = params.get('hora');
            document.getElementById('hora').textContent = hora;
            document.getElementById('p_hora').removeAttribute('hidden');

            trabajador = params.get('nombre')
            document.getElementById('trabajador').textContent = trabajador;
            document.getElementById('p_trabajador').removeAttribute('hidden');
            accionConfirmacion = "Rechazando Atención";
        document.getElementById('fecha').textContent = formatDateToDDMMYYYY(fecha); // Formatea la fecha;

        }


        document.getElementById('servicio').textContent = servicio;
        document.getElementById('accion').textContent = accionConfirmacion;

        //url = `/confirmacion?accion=rechazado&nombre=${nombreUsuario}&cliente=${servicio.nombre}&fecha=${servicio.fecha}&servicio=${servicio.servicio}&hora=${servicio.hora}`;
        
        // Actualizar los elementos HTML con los valores
    }, []);

    return (
        <div className='AppBar'><Navbar />
            <LoadingScreen />
            <div className="container">
                <br />
                <h2>Detalles de la operación:</h2>
                <p id="p_cliente" hidden>
                    <strong>Nombre Cliente:</strong> <span id="cliente"></span>
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
