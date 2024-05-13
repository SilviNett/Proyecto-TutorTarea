import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservedTutorias() {
  const [tutoriasReservadas, setTutoriasReservadas] = useState([
    { id: 1, title: 'Tutoría Reservada 1', localidad: 'Localidad 1', modalidad: 'Modalidad 1', precio: '$20' },
    { id: 2, title: 'Tutoría Reservada 2', localidad: 'Localidad 2', modalidad: 'Modalidad 2', precio: '$25' },
    { id: 3, title: 'Tutoría Reservada 3', localidad: 'Localidad 3', modalidad: 'Modalidad 3', precio: '$30' }
  ]);

  const eliminarTutoria = (id) => {
    setTutoriasReservadas(tutoriasReservadas.filter(tutoria => tutoria.id !== id));
  };

  return (
    <div>
      
      {tutoriasReservadas.map(tutoria => (
        <div key={tutoria.id} className="card mb-3" style={{ margin: '10px', border: '1px solid #ccc' }}>
          <div className="card-body">
            <h5 className="card-title">{tutoria.title}</h5>
            <p className="card-text">Localidad: {tutoria.localidad}</p>
            <p className="card-text">Modalidad: {tutoria.modalidad}</p>
            <p className="card-text">Precio: {tutoria.precio}</p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-danger me-2" onClick={() => eliminarTutoria(tutoria.id)}>Eliminar</button>
              <Link to={`/pagar/${tutoria.id}`} className="btn btn-outline-primary">Pagar</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReservedTutorias;


