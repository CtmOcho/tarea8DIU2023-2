// Importa las bibliotecas necesarias
import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/styles.css';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

// Componente de la barra de navegación
const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HomeIcon color="inherit" sx={{ marginRight: 2 }} />
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Arial, sans-serif' }}>
                    Red de Servicios
                </Typography>
                </Link>
                <Button color="inherit" href="/"></Button>
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;
