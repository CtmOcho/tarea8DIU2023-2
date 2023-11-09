import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';
import LoadingScreen from '../components/loadingScreen';
import Swal from 'sweetalert2';


const data = [
    { servicio: 'Jardineria', nombre: 'Pedro', fecha: '2023-11-17', hora: '10:00' },
    { servicio: 'Jardineria', nombre: 'Juan', fecha: '2023-11-18', hora: '15:00' },
    { servicio: 'Gasfiteria', nombre: 'Diego', fecha: '2023-11-19', hora: '17:00' },
    { servicio: 'Gasfiteria', nombre: 'Alonso', fecha: '2023-11-17', hora: '18:00' },
    { servicio: 'Aseo', nombre: 'Marta', fecha: '2023-11-18', hora: '11:00' },
    { servicio: 'Aseo', nombre: 'Maria', fecha: '2023-11-19', hora: '12:00' },
];


function formatDateToDDMMYYYY(dateString) {
    const dateParts = dateString.split('-'); // Divide la cadena por guiones
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}/${month}/${year}`;
  }
  

const ServicioConfirmacion = () => {
    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get('nombre');

    useEffect(() => {
        const nombreUsuarioSpan = document.getElementById('nombre-usuario');
        nombreUsuarioSpan.textContent = nombreUsuario;
      }, [nombreUsuario]);



    const sortedData = [...data].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    const handleConfirmar = (index, servicio) => {
        const confirmacion = `Cliente: ${servicio.nombre}\nServicio: ${servicio.servicio}\nFecha: ${formatDateToDDMMYYYY(servicio.fecha)}\nHora: ${servicio.hora}`;
    
        Swal.fire({
          title: 'Confirmación de atención\n' + confirmacion,
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
            url = `/confirmacion?accion=confirmado&nombre=${nombreUsuario}&cliente=${servicio.nombre}&fecha=${servicio.fecha}&servicio=${servicio.servicio}&hora=${servicio.hora}`;
            if (result.isConfirmed) {
              Swal.fire('Atención Confirmada!', '', 'success')
              setTimeout(() => {
                window.location.href = url;
              }, 2000);
            } else if (result.isDenied) {
              Swal.fire('Atención no Confirmada', '', 'info')
            }
          })
      };

      const handleRechazar= (index, servicio) => {
        const confirmacion = `Cliente: ${servicio.nombre}\nServicio: ${servicio.servicio}\nFecha: ${formatDateToDDMMYYYY(servicio.fecha)}\nHora: ${servicio.hora}`;
    
        Swal.fire({
          title: 'Rechazo de atención\n' + confirmacion,
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
            url = `/confirmacion?accion=rechazado&nombre=${nombreUsuario}&cliente=${servicio.nombre}&fecha=${servicio.fecha}&servicio=${servicio.servicio}&hora=${servicio.hora}`;
            if (result.isConfirmed) {
              Swal.fire('Atención Rechazada!', '', 'success')
              setTimeout(() => {
                window.location.href = url;
              }, 2000);
            } else if (result.isDenied) {
              Swal.fire('Atención no Rechazada', '', 'info')
            }
          })
      };


      

    return (
        <div className='AppBar'>
            <Navbar />
            <LoadingScreen />

            <div className="container">
                <h2>¡Hola, <span id="nombre-usuario"></span>!</h2>
                <h2>Atenciones por confirmar</h2>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th className="cell">Cliente</th>
                            <th className="cell">Servicio</th>
                            <th className="cell">Fecha</th>
                            <th className="cell">Hora</th>
                            <th className="cell">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((servicio, index) => (
                           <tr key={index}>
                           <td className='cell'>{servicio.nombre}</td>
                           <td className='cell'>{servicio.servicio}</td>
                           <td className='cell'>{formatDateToDDMMYYYY(servicio.fecha)}</td>
                           <td className='cell'>{servicio.hora}</td>
                           <td className='cell'>
                             <button className='okButton' onClick={() => handleConfirmar(index, servicio)}>
                               SÍ
                             </button>
                             <button className='noButton' onClick={() => handleRechazar(index, servicio)}>
                               NO
                             </button>
                           </td>

                         </tr>
                       ))}
                    </tbody>
                </table>
            </div>
            <p>
                    <a href="/" className='homeButtons'>
                        <button className="myButton" >Volver a inicio</button>
                    </a>
                </p>
        </div>
    );
};

export default ServicioConfirmacion;