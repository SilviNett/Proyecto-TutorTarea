import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function TutoriaDetail({ tutoria }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <Card.Img variant="top" src={tutoria.imagenUrl} alt="Tutoría" />
            <Card.Body>
              <Card.Title>{tutoria.title}</Card.Title>
              <Card.Text>{tutoria.description}</Card.Text>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Localidad: {tutoria.locacion}</li>
                <li className="list-group-item">Precio:$ {tutoria.precio}</li>
                <li className="list-group-item">Inscritos: {tutoria.cupos}/15</li>
              </ul>
              <div className="d-grid gap-2 mt-3">
                <Link to="/reserved-tutorias">
                  <Button variant="primary">Reservar Tutoría</Button>
                </Link>
                <Link to="/tutorias" className="btn btn-secondary">Volver</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TutoriaDetail;




