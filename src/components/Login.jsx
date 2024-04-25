import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/LogoTutorTarea.png';

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center"> {/* Centra el contenido horizontalmente */}
        <div className="col-md-6">
          <img src={logo} alt="Logo" className="img-fluid mb-4" /> {/* Muestra el logo y lo hace responsive */}
          <div className="card" style={{ backgroundColor: '#4ccac1' }}> {/* Establece el color de fondo de la tarjeta */}
            <div className="card-body text-center"> {/* Alinea el contenido al centro */}
              <h2 className="card-title">Iniciar Sesión</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: '#5e5ed3', color: '#fff' }}>Iniciar Sesión</button> {/* Cambia el color del botón */}
              </form>
            </div>
            <div className="card-footer text-center"> {/* Alinea el texto al centro en el pie de la tarjeta */}
              <p style={{ color: '#fff' }}>¿No tienes una cuenta? <button className="btn btn-link" style={{ color: '694cd3' }}>Registrarse</button></p> {/* Establece el color del texto en blanco */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;



