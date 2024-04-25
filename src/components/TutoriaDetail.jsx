import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function TutoriaDetail({ tutoria }) {
  return (
    <div>
      <h2>{tutoria.title}</h2>
      <p>{tutoria.description}</p>
      <button className="btn btn-success">Reservar Tutoría</button>
    </div>
  );
}

export default TutoriaDetail;
