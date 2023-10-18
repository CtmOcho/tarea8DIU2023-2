import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';
import LoadingScreen from '../components/loadingScreen';

const data = [
    { servicio: 'aseo', nombre: 'Luisa', fecha: '2023-10-24' },
    { servicio: 'aseo', nombre: 'Marta', fecha: '2023-10-25' },
    { servicio: 'aseo', nombre: 'Carlos', fecha: '2023-10-26' },
    { servicio: 'aseo', nombre: 'Ana', fecha: '2023-10-27' },
    { servicio: 'aseo', nombre: 'Pablo', fecha: '2023-10-28' },
    { servicio: 'electricista', nombre: 'Roberto', fecha: '2023-10-24' },
    { servicio: 'electricista', nombre: 'Elena', fecha: '2023-10-25' },
    { servicio: 'electricista', nombre: 'Javier', fecha: '2023-10-26' },
    { servicio: 'electricista', nombre: 'Isabel', fecha: '2023-10-27' },
    { servicio: 'electricista', nombre: 'Santiago', fecha: '2023-10-28' },
    { servicio: 'tecnico', nombre: 'María', fecha: '2023-10-24' },
    { servicio: 'tecnico', nombre: 'Adrián', fecha: '2023-10-25' },
    { servicio: 'tecnico', nombre: 'Lucía', fecha: '2023-10-26' },
    { servicio: 'tecnico', nombre: 'Daniel', fecha: '2023-10-27' },
    { servicio: 'tecnico', nombre: 'Laura', fecha: '2023-10-28' },
    { servicio: 'gasfiteria', nombre: 'Lorenzo', fecha: '2023-10-24' },
    { servicio: 'gasfiteria', nombre: 'Verónica', fecha: '2023-10-25' },
    { servicio: 'gasfiteria', nombre: 'Hugo', fecha: '2023-10-26' },
    { servicio: 'gasfiteria', nombre: 'Sofía', fecha: '2023-10-27' },
    { servicio: 'gasfiteria', nombre: 'Diego', fecha: '2023-10-28' },
    { servicio: 'jardineria', nombre: 'Lucas', fecha: '2023-10-24' },
    { servicio: 'jardineria', nombre: 'Valentina', fecha: '2023-10-25' },
    { servicio: 'jardineria', nombre: 'Mateo', fecha: '2023-10-26' },
    { servicio: 'jardineria', nombre: 'Camila', fecha: '2023-10-27' },
    { servicio: 'jardineria', nombre: 'Olivia', fecha: '2023-10-28' }
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
            <LoadingScreen />
            <div className="container">
                <h2>Trabajadores disponibles de {servicio}</h2>
                <div id="hora_div" >
                    <p>Selecciona una hora para solicitar un trabajador</p>
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
