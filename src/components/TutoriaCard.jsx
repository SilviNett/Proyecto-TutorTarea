import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import clases from '../data/clases.json';

function TutoriaCard({ tutoria }) {
  return (
    <div className="card">
      <img
        src={tutoria.imagenUrl}
        className="card-img-top"
        alt="Imagen de la tutoría"
        style={{ width: '30%', margin: 'auto', }}
      /> {/* Establece el ancho de la imagen al 50% del tamaño de la tarjeta y la centra horizontalmente */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ fontSize: '1.25rem' }}>
          {tutoria.asignatura}
        </h5>{' '}
        {/* Establece el tamaño del título de la tarjeta */}
        <p className="card-text" style={{ fontSize: '0.8rem' }}>
          {tutoria.descripcion}
        </p>{' '}
        {/* Establece el tamaño del texto de la tarjeta */}
        <ul className="list-group list-group-flush" style={{ fontSize: '0.8rem' }}>
          {' '}
          {/* Establece el tamaño del texto de la lista */}
          <li className="list-group-item">Tutor: {tutoria.nombre}</li>
          <li className="list-group-item">Modalidad: {tutoria.modalidad}</li>
          <li className="list-group-item">Locación: {tutoria.locacion}</li>
          <li className="list-group-item">Tipo: {tutoria.tipo}</li>
        </ul>
        <div className="mt-auto d-flex justify-content-end">
          <button className="btn btn-primary" style={{ backgroundColor: '#03d6b3', border: 'none' }}>
            Ver Detalle
          </button>{' '}
          {/* Cambia el color de fondo del botón y elimina el borde */}
        </div>
      </div>
    </div>
  );
}

function TutoriaList() {
  return (
    <div className="container">
      <div className="row">
        {clases.map((tutoria) => (
          <div key={tutoria.tutor_id} className="col-md-4 mb-3">
            <TutoriaCard tutoria={tutoria} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutoriaList;

