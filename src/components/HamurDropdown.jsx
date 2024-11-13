import React, { useState } from 'react';

const HamurDropdown = (props) => {
  const {selectedOption, setSelectedOption} = props

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ marginTop: '30px' }}> 
      <h4>Hamur Seç<span style={{ color: 'red' }}>*</span></h4>
      <select 
        value={selectedOption} 
        onChange={handleSelect} 
        aria-label="Hamur Seç"
      >
        <option value="" disabled>Hamur Kalınlığı</option>
        <option value="İnce kenar">İnce kenar</option>
        <option value="Kalın kenar">Kalın kenar</option>
        <option value="Peynirli kenar">Peynirli kenar</option>
        <option value="Sarımsaklı kenar">Sarımsaklı kenar</option>
      </select>
    </div>
  );
};

export default HamurDropdown;
