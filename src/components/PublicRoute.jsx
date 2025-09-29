import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PublicRoute() {
  const { currentUser } = useAuth();

  // Se houver um usuário logado, redireciona para a página principal.
  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  // Se não houver usuário logado, renderiza o conteúdo da rota (Login ou Register).
  return <Outlet />;
}

export default PublicRoute;
