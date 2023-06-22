import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import PatientList from './components/Patient/patient_view';



function App() {
  return (
    <div className="App">
      <PatientList />
    </div>
  );
}

export default App;
