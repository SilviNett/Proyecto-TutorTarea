import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReservedTutorias from './ReservedTutorias';
import { Card, Row, Col } from 'react-bootstrap';

function Profile() {
  // Datos ficticios del usuario
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/150", // URL de la imagen del usuario
  };

  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          {/* Contenido del perfil */}
          <h2>Perfil de Usuario</h2>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.image} />
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
          {/* Contenido de las tutorías reservadas */}
          <ReservedTutorias />
        </Col>
      </Row>
    </div>
  );
}

export default Profile;