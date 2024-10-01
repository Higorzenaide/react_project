import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ element: Component, isClosed = false, ...rest }) {
  const isLoggedIn = false; // Simulação de login. Substitua pela lógica real.
  const location = useLocation(); // Obtém o caminho atual

  // Verifica se a rota está fechada e o usuário não está logado
  if (isClosed && !isLoggedIn) {
    console.log(`Acesso negado: Tentativa de acessar ${location.pathname} sem estar logado.`);
    return (
      <Navigate 
        to="/" 
        state={{ prevPath: location.pathname }} 
      />
    );
  }

  // Log de acesso permitido
  console.log(`Acesso permitido: Usuário acessou ${location.pathname}`);
  
  // Retorna o elemento protegido
  return <Component {...rest} />;
}

MyRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
