import React from 'react';

function FilterDropdown({ options, onSelect }) {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <select className="form-select" onChange={handleChange}>
      <option value="">Seleccionar campo...</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default FilterDropdown;

