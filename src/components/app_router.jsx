import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Servicio from '../pages/servicio'
import Formulario from '../pages/formularioServicio'
import Confirmacion from '../pages/confirmacion'
import ListaServicios from '../pages/listaServicios'
import Calificacion from '../pages/calificar'
import ConfirmarSolicitud from '../pages/confirmarSolicitudes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/servicio' element={<Servicio />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/confirmacion' element={<Confirmacion/>} />
        <Route path='/listaServicios' element={<ListaServicios/>} />
        <Route path='/calificar' element={<Calificacion/>} />
        <Route path='/confirmar' element={<ConfirmarSolicitud/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
