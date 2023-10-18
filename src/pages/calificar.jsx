import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';
import LoadingScreen from '../components/loadingScreen';


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

    const [calificaciones, setCalificaciones] = useState({});
    const [serviciosCalificados, setServiciosCalificados] = useState([]);

    useEffect(() => {
        const nombreUsuarioSpan = document.getElementById('nombre-usuario');
        nombreUsuarioSpan.textContent = nombreUsuario;
      }, [nombreUsuario]);


    const handleClick = (index, valor, servicio) => {
        setCalificaciones(prevCalificaciones => ({
            ...prevCalificaciones,
            [index]: valor
        }));
    };

    const handleCalificar = (index, servicio) => {
        setServiciosCalificados(prevServiciosCalificados => [...prevServiciosCalificados, servicio]);
        toast.success('Calificación exitosa', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
        });
    };

    return (
        <div className='AppBar'>
            <Navbar />
            <LoadingScreen />

            <div className="container">
            <h2>¡Hola, <span id="nombre-usuario"></span>!</h2>
                <h2>Calificaciones pendientes</h2>
                <ToastContainer />
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th className="cell">Nombre</th>
                            <th className="cell">Fecha</th>
                            <th className="cell">Calificación</th>
                            <th className="cell">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((servicio, index) => (
                            <tr key={index}>
                                <td className='cell'>{servicio.nombre}</td>
                                <td className='cell'>{servicio.fecha}</td>
                                <td className='cell'>
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
                                    <button className='tabbleButton' onClick={() => handleCalificar(index, servicio)}>Calificar</button>
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

