import React from 'react';
import TutoriaCard from './TutoriaCard'; // Asegúrate de que la ruta de importación es correcta

function TutoriaList({ clases }) { // Asume que 'clases' es pasado como prop
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
