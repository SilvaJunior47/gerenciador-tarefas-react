import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Importe o hook
import { signOut } from 'firebase/auth'; // 2. Importe a função de logout
import { auth } from '../firebaseConfig'; // 3. Importe o objeto auth

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Header() {
  const { currentUser } = useAuth(); // 4. Use o hook para pegar o usuário
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // O onAuthStateChanged cuidará de atualizar o estado.
      // Navegamos para a página de login após o logout.
      navigate('/login');
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            Gerenciador de Tarefas
          </Link>
        </Typography>

        {/* 5. Lógica condicional */}
        {currentUser ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 2 }}>
              Olá, {currentUser.email}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
