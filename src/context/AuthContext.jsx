import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};

// Proveedor de contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    // Puedes almacenar el usuario en localStorage o realizar una llamada a un servidor para autenticar
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    // Puedes limpiar localStorage u otros datos de sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


