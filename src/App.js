import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import PatientList from './components/Patient/patient_view';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientList />} />
      </Routes>
    </Router>
  );
};

export default App;
