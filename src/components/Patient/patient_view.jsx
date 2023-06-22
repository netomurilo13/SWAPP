import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Sidebar from "../sidebar";
import "./../../index.css";
import logo from './../../assets/marisa.png';

const PatientList = () => {
  const patients = [
    {
      name: "Patient 1",
      day: new Date(2023, 5, 10),
      time: "10:00 AM",
      details: "Some details about Patient 1",
    },
    {
      name: "Patient 2",
      day: new Date(2023, 5, 11),
      time: "11:30 AM",
      details: "Some details about Patient 2",
    },
    {
      name: "Patient 3",
      day: new Date(2023, 6, 10),
      time: "2:00 PM",
      details: "Some details about Patient 3",
    },
    {
      name: "Patient 4",
      day: new Date(2023, 11, 12),
      time: "9:45 AM",
      details: "Some details about Patient 4",
    },
    {
      name: "Patient 5",
      day: new Date(2023, 5, 13),
      time: "3:15 PM",
      details: "Some details about Patient 5",
    },
  ];

  const groupedPatients = {};

  // Agrupar pacientes por dia
  patients.forEach((patient) => {
    const day = patient.day.toDateString();
    if (!groupedPatients[day]) {
      groupedPatients[day] = [];
    }
    groupedPatients[day].push(patient);
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPatient, setSelectedPatient] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleClosePopup = () => {
    setSelectedPatient(null);
  };

  // Filtrar pacientes por data completa
  const filteredPatients = groupedPatients[selectedDate.toDateString()] || [];

  const [isIframeVisible, setIframeVisible] = useState(false);

  const handleExternalLink = () => {
    setIframeVisible(true);
  };

  return (
    <div className="App">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Lista de Pacientes por Dia</h1>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        <div className="patients-list">
          <h2>{selectedDate.toDateString()}</h2>
          <ul>
            {filteredPatients.map((patient, index) => (
              <li
                key={index}
                className="patient-item"
                onClick={() => handlePatientClick(patient)}
              >
                {patient.name}
              </li>
            ))}
          </ul>
        </div>
         <button onClick={handleExternalLink}>Abrir App Externo</button>

      {isIframeVisible && (
        <iframe
          src="https://www.appsheet.com/start/ed2be4b3-ca16-434b-a258-0c84007a65bf#appName=MarisaCare-04-640720421&page=form&row=&table=P%C3%A1gina1&view=Formul%C3%A1rio"
          title="External App"
          className="external-iframe"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      )}
      </div>
      {selectedPatient && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Detalhes do Patient:</h3>
            <p>Nome: {selectedPatient.name}</p>
            <p>Dia: {selectedPatient.day.toDateString()}</p>
            <p>Hora: {selectedPatient.time}</p>
            <p>Detalhes: {selectedPatient.details}</p>
            <button onClick={handleClosePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;