import React, { useState } from "react";
import "./../../index.css";
import logo from './../../assets/galileu_azul.png';

const PatientList = () => {
  const [isIframeVisible, setIframeVisible] = useState(false);

  const handleExternalLink = () => {
    setIframeVisible(true);
  };

  return (
    <div className="App">
      <div className="content">
        <img src={logo} alt="Logo" className="logo" style={{ marginBottom: "100px" }} />
        <div className="text-container">
          <p className="main-text">
            Todas as informações que você ceder para mim serão usadas para fornecer uma melhor consulta médica para você!
            Ao clicar para abrir o formulário você concorda com a nossa{" "}
            <a href="https://i9.med.br/termos-de-uso-da-plataforma-i9med-saude-digital/" target="_blank" rel="noopener noreferrer">
              política de proteção de dados e privacidade
            </a>.
            Para acessar o formulário, clique no botão abaixo:
          </p>
          <div className="form-button-container">
            <button className="form-button" onClick={handleExternalLink}>
              Abrir Formulário
            </button>
          </div>
        </div>
      </div>
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
