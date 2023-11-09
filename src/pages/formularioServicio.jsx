import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            div_hora.setAttribute('hidden', 'true');
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
            if(!fechaSeleccionada){
                toast.error('Por favor, ingrese una fecha', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1500
                });
            }else{
                const accionConfirmacion = accion === 'solicitar' ? 'Solicitando Servicio' : 'Ofreciendo Servicio';
                const usuario = nombreUsuario;
                const servic = servicio;
                let confirmacion;
                if (accion === 'ofrecer') {
                    confirmacion = `Nombre: ${usuario}\nFecha: ${fechaSeleccionada}\nServicio: ${servic}\nAcción: ${accionConfirmacion}`;
                }
                Swal.fire({
                    title: 'Confirmación de datos:\n'+confirmacion,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Sí',
                    denyButtonText: 'No',
                    background: '#c2d9ecf6',
                    color: '#003554',
                    confirmButtonColor: '#7AC74F',
                    succesColor: '#7AC74F',
                    allowEnterKey: true,
                    allowEscapeKey: true,
                    allowOutsideClick: true,
                    customClass: {
                    actions: 'my-actions',
                    confirmButton: 'order-3',
                    denyButton: 'order-2',

                    }
                }).then((result) => {
                    let url;
                    if (accion === 'ofrecer') {
                        url = `/confirmacion?accion=${accion}&nombre=${nombreUsuario}&fecha=${fechaSeleccionada}&servicio=${servicio}`;
                    } 
                    if (result.isConfirmed) {
                    Swal.fire('Oferta Ingresada!', '', 'success')
                    setTimeout(() => {
                        window.location.href = url;
                    }, 2000);
                    } else if (result.isDenied) {
                    Swal.fire('Oferta No Ingresada', '', 'info')
                    }
                })
            }
        };

        const solicitarBtn = document.getElementById('solicitar');
        solicitarBtn.textContent = accion === 'solicitar' ? 'Confirmar Solicitar Servicio' : 'Confirmar Ofrecer Servicio';
        solicitarBtn.onclick = confirmarServicio;
    }, [accion, nombreUsuario, servicio]);

    return (
        <div className='AppBar'><Navbar />
            <div className="container">
                <h2>Servicio seleccionado: {servicio}</h2>
          <ToastContainer />

                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input type="date" id="fecha" placeholder="Selecciona una fecha" />
                </div>
                <div id="hora_div" >
                    <label htmlFor="hora">Hora:</label>
                    <input type="time" id="hora"  />
                </div>
                <button className="myButton" id="solicitar" ></button>
            </div>
            <p>
                    <a href="/" className='homeButtons'>
                        <button className="myButton" >Volver a inicio</button>
                    </a>
                </p>
        </div>
    );
}

export default FormularioServicio;
