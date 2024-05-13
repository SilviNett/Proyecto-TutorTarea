import React from 'react';
import { useParams } from 'react-router-dom';
import TutoriaDetail from '../components/TutoriaDetail';
import clases from '../data/clases.json'; // Asume que el archivo JSON está en esta ubicación

function TutoriaDetailPage() {
  const { id } = useParams();
  const tutoria = clases.find(t => t.tutor_id.toString() === id);

  return <TutoriaDetail tutoria={tutoria} />;
}

export default TutoriaDetailPage;