import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Tutorias from './views/Tutorias';
import TutoriaDetailPage from './views/TutoriaDetailPage'; 
import LoginRegister from './views/LoginRegister'; 
import ProfilePage from './views/ProfilePage'; 
import './index.css'
import ReservedTutoriasPage from './views/ReservedTutoriasPage';
import Registro from './views/Registro';
import Payment from './components/Payment';




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
          <Route path="/reserved-tutorias" element={<ReservedTutoriasPage/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/pagar/:id" element={<Payment />} /> {/* Define la ruta para el pago */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}



export default App;