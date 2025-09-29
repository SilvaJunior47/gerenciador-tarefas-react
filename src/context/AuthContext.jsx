import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Importamos nossa configuração do Firebase
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// 1. Criamos o Contexto
const AuthContext = createContext();

// 2. Criamos um hook customizado para facilitar o uso do contexto
// Em vez de importar `useContext` e `AuthContext` em todo lugar,
// só vamos precisar importar `useAuth`.
export function useAuth() {
  return useContext(AuthContext);
}

// 3. Criamos o Componente Provedor (Provider)
// Este componente vai "envolver" nossa aplicação e fornecer o estado de autenticação
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para saber se a verificação inicial já terminou

  useEffect(() => {
    // A função onAuthStateChanged é um "ouvinte" do Firebase.
    // Ela é chamada sempre que o estado de login do usuário muda (login, logout).
    // Ela também é chamada uma vez no carregamento inicial da página.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Se `user` for um objeto, o usuário está logado. Se for `null`, não está.
      setLoading(false); // Marca que a verificação inicial terminou.
    });

    // A função retornada pelo useEffect é chamada quando o componente é "desmontado".
    // Isso é importante para limpar o "ouvinte" e evitar vazamentos de memória.
    return unsubscribe;
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez.

  // O valor que será compartilhado com todos os componentes filhos
  const value = {
    currentUser,
  };

  // Enquanto o Firebase verifica se existe um usuário logado (ex: de uma sessão anterior),
  // mostramos uma tela de carregamento. Isso evita um "piscar" da tela de login
  // antes de redirecionar para a home, por exemplo.
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  // Se não estiver carregando, renderiza o provedor com os filhos da aplicação
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
