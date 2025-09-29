import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
  const { currentUser } = useAuth();

  // Se não houver usuário logado, redireciona para a página de login.
  // O `replace` evita que a rota protegida fique no histórico do navegador.
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Se houver um usuário logado, renderiza o conteúdo da rota (a página solicitada).
  // O <Outlet /> funciona como um placeholder para as rotas aninhadas.
  return <Outlet />;
}

export default ProtectedRoute;
