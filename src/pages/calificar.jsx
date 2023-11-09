import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';
import LoadingScreen from '../components/loadingScreen';

const initialData = [
    { servicio: 'Jardineria', nombre: 'Pedro', fecha: '2023-11-17' },
    { servicio: 'Jardineria', nombre: 'Juan', fecha: '2023-11-18' },
    { servicio: 'Gasfiteria', nombre: 'Diego', fecha: '2023-11-19' },
    { servicio: 'Gasfiteria', nombre: 'Alonso', fecha: '2023-11-17' },
    { servicio: 'Aseo', nombre: 'Marta', fecha: '2023-11-18' },
    { servicio: 'Aseo', nombre: 'Maria', fecha: '2023-11-19' },
];

function formatDateToDDMMYYYY(dateString) {
    const dateParts = dateString.split('-'); // Divide la cadena por guiones
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}/${month}/${year}`;
}

const ServicioDetalle = () => {
    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get('nombre');

    const [calificaciones, setCalificaciones] = useState({});
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const nombreUsuarioSpan = document.getElementById('nombre-usuario');
        nombreUsuarioSpan.textContent = nombreUsuario;
    }, [nombreUsuario]);

    const handleClick = (index, valor, servicio) => {
        setCalificaciones((prevCalificaciones) => ({
            ...prevCalificaciones,
            [index]: valor,
        }));
    };

    const handleCalificar = (index, servicio) => {
        const calificacion = calificaciones[index];

        if (calificacion > 0) {
            toast.success('Calificación exitosa', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });

            // Filtrar los servicios no calificados y establecer el nuevo estado
            setTimeout(() => {
                // Elimina la fila de datos
                const newData = [...data];
                newData.splice(index, 1);
                setData(newData);  // Asume que tienes un estado setData para actualizar los datos
                setCalificaciones((prevCalificaciones) => {
                    const newCalificaciones = { ...prevCalificaciones };
                    delete newCalificaciones[index];
                    return newCalificaciones;
                });
            }, 2000);

           
        } else {
            toast.error('Por favor, selecciona una calificación mayor a 0', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
        }
    };


    const sortedData = [...data].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));


    return (
        <div className="AppBar">
            <Navbar />
            <LoadingScreen />

            <div className="container">
                <h2>
                    ¡Hola, <span id="nombre-usuario"></span>!
                </h2>
                <h2>Calificaciones pendientes</h2>
                <ToastContainer />
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th className="cell">Nombre</th>
                            <th className="cell">Fecha</th>
                            <th className="cell">Calificación</th>
                            <th className="cell">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((servicio, index) => (
                            <tr key={index}>
                                <td className="cell">{servicio.nombre}</td>
                                <td className="cell">{formatDateToDDMMYYYY(servicio.fecha)}</td>
                                <td className="cell">
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
                                    <button className="tabbleButton" onClick={() => handleCalificar(index, servicio)}>
                                        Calificar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p>
                <a href="/" className="homeButtons">
                    <button className="myButton">Volver a inicio</button>
                </a>
            </p>
        </div>
    );
};

export default ServicioDetalle;
