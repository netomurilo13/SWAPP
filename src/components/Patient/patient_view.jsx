import React, { useState } from "react";
import Sidebar from "../sidebar";
import "./../../index.css";
import logo from './../../assets/marisa.png';

const PatientList = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [isIframeVisible, setIframeVisible] = useState(false);

  const handleExternalLink = () => {
    setIframeVisible(true);
  };

  return (
    <div className="App">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        </div>
         <button onClick={handleExternalLink}>Abrir Formulário</button>

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
  );
};

export default PatientList;