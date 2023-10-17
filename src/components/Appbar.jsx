// Importa las bibliotecas necesarias
import React from 'react';
import { AppBar,Toolbar,IconButton,Typography } from '@mui/material';

// Componente de la barra de navegación
const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit'  aria-label='logo' href='/'>
            RED DE SERVICIOS
            </IconButton>
            
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
