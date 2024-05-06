import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/LogoTutorTarea.png';
import { Link } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {

        window.location.href = '/ruta-despues-de-inicio-de-sesion';
      } else {

        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al procesar la solicitud');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={logo} alt="Logo" className="img-fluid mb-4" /> 
          <div className="card" style={{ backgroundColor: '#4ccac1' }}> 
            <div className="card-body text-center">
              <h2 className="card-title">Iniciar Sesión</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: '#5e5ed3', color: '#fff' }}>Iniciar Sesión</button> 
              </form>
            </div>
            <div className="card-footer text-center"> 
              <p style={{ color: '#fff' }}>¿No tienes una cuenta? <Link to="/Registro" className="btn btn-link" style={{ color: '#694cd3' }}>Registrarse</Link></p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
