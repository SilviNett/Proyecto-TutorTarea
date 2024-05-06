import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReservedTutorias from './ReservedTutorias';
import { Card, Row, Col, Table } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; 

function Profile() {

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };


  const tutoriasReservadas = [
    { id: 1, nombre: 'Tutoría 1', estado: 'Pagada', realizado: 'Realizado' },
    { id: 2, nombre: 'Tutoría 2', estado: 'Pendiente de pago', realizado: 'No Realizado' },
    { id: 3, nombre: 'Tutoría 3', estado: 'Pagada', realizado: 'Realizado' }
  ];

  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
     
          <h2>Datos de usuario</h2>
          <Card style={{ width: '18rem' }}>
            <div style={{ textAlign: 'center' }}>
              <FaUser size={64} />
            </div>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
              <Card.Text>
                <strong>Biografía:</strong> {user.bio}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
    
          <div>
            <h2>Historial</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th>Realizado</th> 
                </tr>
              </thead>
              <tbody>
                {tutoriasReservadas.map(tutoria => (
                  <tr key={tutoria.id}>
                    <td>{tutoria.nombre}</td>
                    <td style={{ color: tutoria.estado === 'Pendiente de pago' ? 'red' : tutoria.estado === 'Pagada' ? 'blue' : 'inherit' }}>{tutoria.estado}</td>
                    <td style={{ color: tutoria.realizado === 'Realizado' ? 'green' : 'gray' }}>{tutoria.realizado}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;


