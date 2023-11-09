import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';
import LoadingScreen from '../components/loadingScreen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const data = [
    { servicio: 'Aseo', nombre: 'Luisa', fecha: '2023-11-24' },
    { servicio: 'Aseo', nombre: 'Marta', fecha: '2023-11-25' },
    { servicio: 'Aseo', nombre: 'Carlos', fecha: '2023-11-26' },
    { servicio: 'Aseo', nombre: 'Ana', fecha: '2023-11-27' },
    { servicio: 'Aseo', nombre: 'Pablo', fecha: '2023-11-28' },
    { servicio: 'Electricista', nombre: 'Roberto', fecha: '2023-11-24' },
    { servicio: 'Electricista', nombre: 'Elena', fecha: '2023-11-25' },
    { servicio: 'Electricista', nombre: 'Javier', fecha: '2023-11-26' },
    { servicio: 'Electricista', nombre: 'Isabel', fecha: '2023-11-27' },
    { servicio: 'Electricista', nombre: 'Santiago', fecha: '2023-11-28' },
    { servicio: 'Tecnico', nombre: 'María', fecha: '2023-11-24' },
    { servicio: 'Tecnico', nombre: 'Adrián', fecha: '2023-11-25' },
    { servicio: 'Tecnico', nombre: 'Lucía', fecha: '2023-11-26' },
    { servicio: 'Tecnico', nombre: 'Daniel', fecha: '2023-11-27' },
    { servicio: 'Tecnico', nombre: 'Laura', fecha: '2023-11-28' },
    { servicio: 'Gasfiteria', nombre: 'Lorenzo', fecha: '2023-11-24' },
    { servicio: 'Gasfiteria', nombre: 'Verónica', fecha: '2023-11-25' },
    { servicio: 'Gasfiteria', nombre: 'Hugo', fecha: '2023-11-26' },
    { servicio: 'Gasfiteria', nombre: 'Sofía', fecha: '2023-11-27' },
    { servicio: 'Gasfiteria', nombre: 'Diego', fecha: '2023-11-28' },
    { servicio: 'Jardineria', nombre: 'Lucas', fecha: '2023-11-24' },
    { servicio: 'Jardineria', nombre: 'Valentina', fecha: '2023-11-25' },
    { servicio: 'Jardineria', nombre: 'Mateo', fecha: '2023-11-26' },
    { servicio: 'Jardineria', nombre: 'Camila', fecha: '2023-11-27' },
    { servicio: 'Jardineria', nombre: 'Olivia', fecha: '2023-11-28' }
];


function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Agrega 1 ya que en JavaScript los meses van de 0 a 11
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  }
  
const ServicioDetalle = () => {
    const [hora, setHora] = useState('');
    const [horaValida, setHoraValida] = useState(false);


    const params = new URLSearchParams(window.location.search);
    const servicio = params.get('servicio');
    const nombreUsuario = params.get('nombre');
    const accion = params.get('accion');
    // Función para actualizar el estado cuando cambia la hora
    const handleHoraChange = (event) => {
        const horaIngresada = event.target.value;
        // Verifica que la hora esté en el rango de 08:00 a 20:00
        const horaValida = /^([0-1][0-9]|2[0]):[0-5][0-9]$/.test(horaIngresada);
        setHora(horaIngresada);
        setHoraValida(horaValida);

    }

    const handleSolicitarClick  = (trabajador, fecha, servicio) => {
        if (horaValida) {
            window.location.href = `/confirmacion?nombre=${nombreUsuario}&trabajador=${trabajador}&fecha=${fecha}&servicio=${servicio}&accion=${accion}&hora=${hora}`;
        } else {
            toast.error('Por favor, ingrese una hora válida', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            });
        }
    }
    useEffect(() => {
        const nombreUsuarioSpan = document.getElementById('nombre-usuario');
        nombreUsuarioSpan.textContent = nombreUsuario;
      }, [nombreUsuario]);

    // Filtra la lista según el servicio pasado por URL
    const serviciosFiltrados = data.filter(item => item.servicio === servicio);

    if (serviciosFiltrados.length === 0) {
        return <div>Servicio no encontrado</div>;
    }

    return (
        <div className='AppBar'><Navbar />
            <LoadingScreen />
            <div className="container">
                <h2>¡Hola, <span id="nombre-usuario"></span>!</h2>
                <h2>Trabajadores disponibles de {servicio}</h2>
                <div id="hora_div" >
                    <ToastContainer />
                    <p>Selecciona una hora para solicitar un trabajador</p>
                    <p>(Hora válida entre 08:00 y 20:00)</p>
                    <label htmlFor="hora">Hora: </label>
                    <input
                        type="time"
                        id="hora"
                        value={hora}
                        onChange={handleHoraChange}  // Agrega el event listener para el cambio de hora
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Trabajador</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviciosFiltrados.map((servicio, index) => (
                            <tr key={index}>
                                <td>{servicio.nombre}</td>
                                <td>{formatDateToDDMMYYYY(servicio.fecha)}</td>
                                <td>
                                        <button className='tabbleButton'  onClick={() => handleSolicitarClick(servicio.nombre,servicio.fecha,servicio.servicio)}>Solicitar</button>
                                    
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

export default ServicioDetalle;
