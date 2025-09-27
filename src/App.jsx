import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        {/* O Outlet renderiza a página da rota atual (Home ou TaskDetail) */}
        <Outlet />
      </Container>
    </>
  );
}

export default App;
