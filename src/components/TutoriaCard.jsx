import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function TutoriaCard({ tutoria }) {
  return (
    <div className="card h-100">
      <div className="card-img-top bg-cover" style={{ backgroundImage: `url(${tutoria.imagenUrl})`, height: '200px' }}> 
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {tutoria.asignatura}
        </h5>
        <p className="card-text">
          {tutoria.descripcion}
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Tutor: {tutoria.nombre}</li>
          <li className="list-group-item">Modalidad: {tutoria.modalidad}</li>
          <li className="list-group-item">Locación: {tutoria.locacion}</li>
          <li className="list-group-item">Tipo: {tutoria.tipo}</li>
        </ul>
        <div className="mt-auto">
          <Link to={`/tutoria/${tutoria.id}`} className="btn btn-primary" style={{ backgroundColor: '#03d6b3', border: 'none' }}> 
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  ); 
}

export default React.memo(TutoriaCard);
