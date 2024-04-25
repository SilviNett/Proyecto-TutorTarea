import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Tutorias from './views/Tutorias';
import TutoriaDetailPage from './views/TutoriaDetailPage'; // Importar la página del detalle de la tutoría
import LoginRegister from './views/LoginRegister'; // Importar la página de inicio de sesión y registro
import ReservedTutoriasPage from './views/ReservedTutoriasPage'; // Importar la página de tutorías reservadas
import ProfilePage from './views/ProfilePage'; // Importar la página del perfil de usuario

import './index.css'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tutorias" element={<Tutorias />} />
          <Route path="/tutoria/:id" element={<TutoriaDetailPage />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/reserved-tutorias" element={<ReservedTutoriasPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}



export default App;