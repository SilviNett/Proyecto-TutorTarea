import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TutoriaCard from '../components/TutoriaCard';
import clasesData from '../data/clases.json'; 

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
  const [tutorias, setTutorias] = useState([]);

  useEffect(() => {
    setTutorias(clasesData);
    setFilteredTutorias(clasesData);
  }, []);

  const handleFilter = (selectedOptions) => {
    let filteredData = [...tutorias];
    selectedOptions.forEach(option => {
      const { value: filterValue } = option;
      filteredData = filteredData.filter(tutoria =>
        tutoria.asignatura === filterValue ||
        tutoria.modalidad === filterValue ||
        tutoria.locacion === filterValue
      );
    });
    setFilteredTutorias(filteredData);
  };

  return (
    <div className="container py-2 px-0"> 
      <h2 className="mb-2">Tutorías Disponibles</h2> 
      <FilterSearch tutorias={tutorias} onFilter={handleFilter} />
      <div className="row mx-0"> 
        {filteredTutorias.map((tutoria) => (
          <div key={tutoria.id} className="col-md-4 px-2 mb-2"> 
            <TutoriaCard tutoria={tutoria} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorias;