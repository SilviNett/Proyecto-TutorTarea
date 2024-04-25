import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function Register() {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [comuna, setComuna] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos a un servidor o almacenarlos localmente
    console.log('Datos del formulario:', { nombre, comuna, correo, edad });
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Registro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su nombre completo" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formComuna">
          <Form.Label>Comuna</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su comuna" 
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCorreo">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Ingrese su correo electrónico" 
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ingrese su edad" 
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

export default Register;

