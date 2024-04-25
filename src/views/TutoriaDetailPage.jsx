import React from 'react';
import { useParams } from 'react-router-dom';
import TutoriaDetail from '../components/TutoriaDetail';

function TutoriaDetailPage() {
  // Obtenemos el parámetro de la URL para el ID de la tutoría
  const { id } = useParams();

  // Simulación de datos de la tutoría
  const tutoria = {
    id: id,
    title: `Tutoría ${id}`,
    description: `Descripción de la tutoría ${id}`,
  };

  return (
    <div>
      <h2>Detalle de la Tutoría</h2>
      <TutoriaDetail tutoria={tutoria} />
    </div>
  );
}

export default TutoriaDetailPage;
