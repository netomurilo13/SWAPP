import React from 'react';
import './index.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const patients = [
    { name: 'Patient 1', day: new Date(2023, 5, 10) },
    { name: 'Patient 2', day: new Date(2023, 5, 11) },
    { name: 'Patient 3', day: new Date(2023, 5, 10) },
    { name: 'Patient 4', day: new Date(2023, 5, 12) },
    { name: 'Patient 5', day: new Date(2023, 5, 13) },
  ];

  const groupedPatients = {};

  // Agrupar pacientes por dia
  patients.forEach((patient) => {
    const day = patient.day.toDateString();
    if (!groupedPatients[day]) {
      groupedPatients[day] = [];
    }
    groupedPatients[day].push(patient.name);
  });

  return (
    <div className="App">
      <h1>Lista de Pacientes por Dia</h1>
      <div className="calendar-container">
        <Calendar />
      </div>
      <div className="patients-list">
        {Object.keys(groupedPatients).map((day) => (
          <div key={day} className="day-container">
            <h2>{day}</h2>
            <ul>
              {groupedPatients[day].map((patient, index) => (
                <li key={index}>{patient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
