import React, { useState } from 'react';
import Select from 'react-select';
import TutoriaCard from '../components/TutoriaCard';

function FilterSearch({ tutorias, onFilter }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFilterChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    onFilter(selectedOptions);
  };

  return (
    <div className="mb-3">
      <Select
        isMulti
        options={getOptionsFromTutorias(tutorias)}
        value={selectedOptions}
        onChange={handleFilterChange}
      />
    </div>
  );
}

function getOptionsFromTutorias(tutorias) {
  const uniqueAsignaturas = [...new Set(tutorias.map(tutoria => tutoria.asignatura))];
  const uniqueModalidades = [...new Set(tutorias.map(tutoria => tutoria.modalidad))];
  const uniqueLocaciones = [...new Set(tutorias.map(tutoria => tutoria.locacion))];
  const options = [
    { label: 'Asignatura', options: uniqueAsignaturas.map(asignatura => ({ value: asignatura, label: asignatura })) },
    { label: 'Modalidad', options: uniqueModalidades.map(modalidad => ({ value: modalidad, label: modalidad })) },
    { label: 'Locación', options: uniqueLocaciones.map(locacion => ({ value: locacion, label: locacion })) }
  ];
  return options;
}

function Tutorias() {
  const [filteredTutorias, setFilteredTutorias] = useState([]);

  const handleFilter = (selectedOptions) => {
    let filteredData = [...tutorias];
    selectedOptions.forEach(option => {
      const { value: filterValue, label: filterLabel } = option;
      filteredData = filteredData.filter(tutoria => tutoria.asignatura === filterValue || tutoria.modalidad === filterValue || tutoria.locacion === filterValue);
    });
    setFilteredTutorias(filteredData);
  };

  // Definir tus tutorías aquí
  const tutorias = [
    { id: 1, asignatura: 'Matemáticas', modalidad: 'Presencial', locacion: 'Ciudad de México' },
    { id: 2, asignatura: 'Física', modalidad: 'Virtual', locacion: 'Guadalajara' },
    // Otras tutorías...
  ];

  return (
    <div>
      <h2>Tutorías Disponibles</h2>
      <FilterSearch tutorias={tutorias} onFilter={handleFilter} />
      <div className="row">
        {filteredTutorias.map((tutoria) => (
          <div key={tutoria.id} className="col-md-4 mb-4">
            <TutoriaCard tutoria={tutoria} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorias;

