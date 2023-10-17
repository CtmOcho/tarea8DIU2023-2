import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';

const data = [
    { servicio: 'jardineria', nombre: 'Pedro', fecha: '2023-10-17' },
    { servicio: 'jardineria', nombre: 'Juan', fecha: '2023-10-18' },
    { servicio: 'gasfiteria', nombre: 'Diego', fecha: '2023-10-19' },
    { servicio: 'gasfiteria', nombre: 'Alonso', fecha: '2023-10-17' },
    { servicio: 'otros', nombre: 'Hola', fecha: '2023-10-18' },
    { servicio: 'otros', nombre: 'Adios', fecha: '2023-10-19' },
];

const ServicioDetalle = () => {
    const [hora, setHora] = useState('');

    const params = new URLSearchParams(window.location.search);
    const servicio = params.get('servicio');
    const nombreUsuario = params.get('nombre');
    const accion = params.get('accion');

    // Función para actualizar el estado cuando cambia la hora
    const handleHoraChange = (event) => {
        setHora(event.target.value);
    }

    // Filtra la lista según el servicio pasado por URL
    const serviciosFiltrados = data.filter(item => item.servicio === servicio);

    if (serviciosFiltrados.length === 0) {
        return <div>Servicio no encontrado</div>;
    }

    return (
        <div className='AppBar'><Navbar />
            <br />
            <br />

            <div className="container">
                <h2>Trabajadores disponibles de {servicio}</h2>
                <div id="hora_div" >
                    <h2>Selecciona una hora para solicitar un trabajador</h2>
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
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviciosFiltrados.map((servicio, index) => (
                            <tr key={index}>
                                <td>{servicio.nombre}</td>
                                <td>{servicio.fecha}</td>
                                <td>
                                    <Link
                                        to={`/confirmacion?nombre=${nombreUsuario}&trabajador=${servicio.nombre}&fecha=${servicio.fecha}&servicio=${servicio.servicio}&accion=${accion}&hora=${hora}`}
                                    >
                                        <button>Solicitar</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>

    );
};

export default ServicioDetalle;
