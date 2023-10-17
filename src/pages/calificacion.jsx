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
    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get('nombre');
    const accion = params.get('accion');

    if (data.length === 0) {
        return <div>Servicio no encontrado</div>;
    }

    const [calificaciones, setCalificaciones] = useState({});
    const [serviciosCalificados, setServiciosCalificados] = useState([]);
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const handleClick = (index, valor, servicio) => {
        setCalificaciones(prevCalificaciones => ({
            ...prevCalificaciones,
            [index]: valor
        }));
    };

    const handleCalificar = (index, servicio) => {
        setServiciosCalificados(prevServiciosCalificados => [...prevServiciosCalificados, servicio]);
        setMostrarMensaje(true);
    };

    return (
        <div className='AppBar'>
            <Navbar />
            <br />
            <br />

            <div className="container">
                <h2>Calificaciones pendientes</h2>
                {mostrarMensaje && <div className="mensaje">Calificación exitosa</div>}
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Calificación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((servicio, index) => (
                            <tr key={index}>
                                <td>{servicio.nombre}</td>
                                <td>{servicio.fecha}</td>
                                <td>
                                    <div className="estrellas">
                                        {[1, 2, 3, 4, 5].map((valor) => (
                                            <span
                                                key={valor}
                                                id={index}
                                                className={valor <= (calificaciones[index] || 0) ? 'estrella activa' : 'estrella'}
                                                onClick={() => handleClick(index, valor, servicio)}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <button onClick={() => handleCalificar(index, servicio)}>Calificar</button>
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
