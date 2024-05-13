import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
      email,
      role,
      phone,
      address,
      city,
      age
    };

    console.log('Datos del usuario enviados:', userData); // Agregar este console.log

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Registro exitoso:', jsonResponse);
        navigate('/login');
      } else {
        throw new Error('Algo salió mal con el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px', margin: '0 auto' }}>
    <h2 className="text-center">Formulario de Registro</h2>
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRole">
          <Form.Label>Rol</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su rol"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su edad"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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


/*
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [edad, setEdad] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username, password, correo, rol, telefono, direccion, ciudad, edad
    };

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Registro exitoso:', jsonResponse);
        navigate('/login');
      } else {
        throw new Error('Algo salió mal con el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Formulario de Registro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCorreo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRol">
          <Form.Label>Rol</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
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


*/