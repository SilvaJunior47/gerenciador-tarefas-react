import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { AuthProvider } from './context/AuthContext';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import TaskDetail from './pages/TaskDetail.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'; // <-- 1. IMPORTE
import PublicRoute from './components/PublicRoute.jsx';   // <-- 2. IMPORTE
import './index.css';

const theme = createTheme({ /* ... seu tema ... */ });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* O App continua sendo o layout geral */}
            <Route element={<App />}>

              {/* Rotas Protegidas (só para usuários logados) */}
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/tarefa/:taskId" element={<TaskDetail />} />
                {/* A página de Perfil também viria aqui */}
              </Route>

              {/* Rotas Públicas (só para usuários deslogados) */}
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
