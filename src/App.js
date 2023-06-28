import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import { Helmet } from 'react-helmet';
import PatientList from './components/Patient/patient_view';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYouPage from './components/finish/finish_view';

const App = () => {
  return (
    <Router>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SH9HRC1WCT"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SH9HRC1WCT');
          `}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;
