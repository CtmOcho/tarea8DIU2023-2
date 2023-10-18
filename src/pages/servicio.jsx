import React, { useEffect } from 'react';
import '../stylesheets/styles.css';
import Navbar from '../components/Appbar';

function SeleccionarServicio() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const nombreUsuario = params.get('nombre');
        const accion = params.get('accion');

        const nombreUsuarioSpan = document.getElementById('nombre-usuario');
        const accionSpan = document.getElementById('accion');

        nombreUsuarioSpan.textContent = nombreUsuario;
        accionSpan.textContent = accion === 'solicitar' ? 'solicitando' : 'ofreciendo';

        const jardineriaLink = document.getElementById('jardineria-link');
        const gasfiteriaLink = document.getElementById('gasfiteria-link');
        const aseoLink = document.getElementById('aseo-link');
        const electricistaLink = document.getElementById('electricista-link');
        const tecnicoLink = document.getElementById('tecnico-link');
        
        if (accion === 'solicitar') {
            jardineriaLink.href = `/listaServicios?nombre=${nombreUsuario}&accion=${accion}&servicio=jardineria`;
            gasfiteriaLink.href = `/listaServicios?nombre=${nombreUsuario}&accion=${accion}&servicio=gasfiteria`;
            aseoLink.href = `/listaServicios?nombre=${nombreUsuario}&accion=${accion}&servicio=aseo`;
            electricistaLink.href = `/listaServicios?nombre=${nombreUsuario}&accion=${accion}&servicio=electricista`;
            tecnicoLink.href = `/listaServicios?nombre=${nombreUsuario}&accion=${accion}&servicio=tecnico`;
        } else {
            jardineriaLink.href = `/formulario?nombre=${nombreUsuario}&accion=${accion}&servicio=jardineria`;
            gasfiteriaLink.href = `/formulario?nombre=${nombreUsuario}&accion=${accion}&servicio=gasfiteria`;
            aseoLink.href = `/formulario?nombre=${nombreUsuario}&accion=${accion}&servicio=aseo`;
            electricistaLink.href = `/formulario?nombre=${nombreUsuario}&accion=${accion}&servicio=electricista`;
            tecnicoLink.href = `/formulario?nombre=${nombreUsuario}&accion=${accion}&servicio=tecnico`;
        }
    }, []);

    return (
        <div className='AppBar'><Navbar />
            <div className="container">
                <br />
                <h2>¡Hola, <span id="nombre-usuario"></span>!</h2>
                <p>Estás <span id="accion"></span> un servicio</p>
                <p>Selecciona el tipo de servicio:</p>
                <a href="#" id="jardineria-link">
                    <myButton className="myButton" id="jardineria">
                        Jardinería
                    </myButton>
                </a>

                <a href="#" id="gasfiteria-link">
                    <myButton className="myButton" id="gasfiteria">
                        Gasfitería
                    </myButton>
                </a>

                <a href="#" id="aseo-link">
                    <myButton className="myButton" id="aseo">
                        Aseo
                    </myButton>
                </a>

                <a href="#" id="electricista-link">
                    <myButton className="myButton" id="electricista">
                        Electricista
                    </myButton>
                </a>

                <a href="#" id="tecnico-link">
                    <myButton className="myButton" id="tecnico">
                        Técnico línea blanca
                    </myButton>
                </a>
            </div></div>
    );
}

export default SeleccionarServicio;
