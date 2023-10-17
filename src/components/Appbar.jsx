// Importa las bibliotecas necesarias
import React from 'react';
import '../stylesheets/styles.css';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

// Componente de la barra de navegación
const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <HomeIcon color="inherit" sx={{ marginRight: 2 }} />
                <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Arial, sans-serif' }}>
                    Red de Servicios
                </Typography>
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;
