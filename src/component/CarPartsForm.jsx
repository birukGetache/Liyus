// src/CarPartsForm.js
import React, { useState } from 'react';
import './CarPartsForm.css'; // Add your styles here

const CarPartsForm = ({ showForm }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [engineType, setEngineType] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [vin, setVin] = useState('');
  const [trimLevel, setTrimLevel] = useState('');
  const [partDescription, setPartDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      make,
      model,
      year,
      engineSize,
      engineType,
      partNumber,
      vin,
      trimLevel,
      partDescription,
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h2 style={{paddingLeft:"10px" , paddingRight:"10px" , display:"flex" , justifyContent:"space-between"}}> <span style={{fontFamily:"cursive"}}>Car Spare Parts Form</span><span onClick={() => showForm(false)} >&times;</span></h2> 
        <form onSubmit={handleSubmit} style={{zIndex:"1000"}}>
          <label>
            Make:
            <select value={make} onChange={(e) => setMake(e.target.value)}>
              <option value="">Select Make</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              {/* Add more makes as needed */}
            </select>
          </label>

          <label>
            Model:
            <select value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="">Select Model</option>
              {/* Populate model options based on make */}
            </select>
          </label>

          <label>
            Year of Manufacture:
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min="1900"
              max={new Date().getFullYear()}
            />
          </label>

          <label>
            Engine Size:
            <input
              type="text"
              value={engineSize}
              onChange={(e) => setEngineSize(e.target.value)}
            />
          </label>

          <label>
            Engine Type:
            <select value={engineType} onChange={(e) => setEngineType(e.target.value)}>
              <option value="">Select Engine Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              {/* Add more engine types as needed */}
            </select>
          </label>

          <label>
            Part Number:
            <input
              type="text"
              value={partNumber}
              onChange={(e) => setPartNumber(e.target.value)}
            />
          </label>

          <label>
            VIN:
            <input
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
            />
          </label>

          <label>
            Trim Level:
            <select value={trimLevel} onChange={(e) => setTrimLevel(e.target.value)}>
              <option value="">Select Trim Level</option>
              <option value="LX">LX</option>
              <option value="EX">EX</option>
              <option value="Sport">Sport</option>
              {/* Add more trim levels as needed */}
            </select>
          </label>

          <label>
            Specific Part Description:
            <input
              type="text"
              value={partDescription}
              onChange={(e) => setPartDescription(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CarPartsForm;
