import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservedTutorias() {
  // Datos ficticios de tutorías reservadas
  const tutoriasReservadas = [
    { id: 1, nombre: 'Tutoría de Matemáticas', lugar: 'Online', fecha: '2024-04-20', hora: '10:00 AM' },
    { id: 2, nombre: 'Tutoría de Historia', lugar: 'Biblioteca', fecha: '2024-04-22', hora: '2:00 PM' },
    { id: 3, nombre: 'Tutoría de Ciencias', lugar: 'Laboratorio', fecha: '2024-04-25', hora: '3:30 PM' }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Tutorías Reservadas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Lugar</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {tutoriasReservadas.map(tutoria => (
            <tr key={tutoria.id}>
              <td>{tutoria.id}</td>
              <td>{tutoria.nombre}</td>
              <td>{tutoria.lugar}</td>
              <td>{tutoria.fecha}</td>
              <td>{tutoria.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-primary">Pagar</button>
      </div>
    </div>
  );
}

export default ReservedTutorias;