import React, { useState, useEffect } from "react";
import "./../../index.css";
import logo1 from "./../../assets/galileu_azul.png";
import logo2 from "./../../assets/saude.png";
import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom";

const PatientList = () => {
  const [isIframeVisible, setIframeVisible] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const location = useLocation();
  const demo = "%7B%0A%22group%22%3A%20%22Demo%22%0A%7D";
  let parameter = new URLSearchParams(location.search).get("parameter");
  let isRegister = new URLSearchParams(location.search).get("register");
  console.log(isRegister);
  let validState = true;
  const currentURL = window.location.href;
  console.log("URL completa:", currentURL);
  
  let logoImage;
  if (currentURL.includes("apresentacaohra")) {
    logoImage = logo2;
    validState = false;
    parameter = decodeURIComponent(demo);
  } else if (
    currentURL.includes(
      "%7B%0A%22group%22%3A%20%22Sa%C3%BAde%20da%20Fam%C3%ADlia%20Digital%22%0A%7D"
    )
  ) {
    logoImage = logo2;
  } else {
    logoImage = logo1;
  }

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "G-SH9HRC1WCT",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  const handleExternalLink = () => {
    setIframeVisible(true);
    setButtonClicked(true);
  };

  

  const encodeParameter = encodeURIComponent(parameter);
  const taruma = "%7B%0A%22group%22%20%3A%20%22Tarum%C3%A3%22%0A%7D";
  const i9med = "%7B%0A%22group%22%20%3A%20%22i9med%22%0A%7D";
  const conveniados =
    "%7B%0A%22group%22%20%3A%20%22Piloto%20Galileu%C2%A0CEJAM%22%0A%7D";
  const saude =
    "%7B%0A%22group%22%3A%20%22Sa%C3%BAde%20da%20Fam%C3%ADlia%20Digital%22%0A%7D";
  console.log(taruma === encodeParameter);

  let errorMessage = null;
  let content = null;

  if (
    encodeParameter !== taruma &&
    encodeParameter !== conveniados &&
    encodeParameter !== i9med &&
    validState === true &&
    encodeParameter !== saude
  ) {
    errorMessage = (
      <div className="error-container">
        <img
          src={logoImage}
          alt="Logo"
          className="logo"
          style={{
            marginBottom: "100px",
            height: logoImage === logo1 ? "113px" : "304px",
            width: logoImage === logo1 ? "283px" : "610px",
          }}
        />
        <p className="error-message">
          Link inválido. Favor solicitar novamente o link de acesso a essa
          aplicação.
        </p>
      </div>
    );
  } else {
    content = (
      <div className="content">
        <img
          src={logoImage}
          alt="Logo"
          className="logo"
          style={{
            marginBottom: "100px",
            height: logoImage === logo1 ? "113px" : "260px",
            width: logoImage === logo1 ? "283px" : "269px",
          }}
        />
        <div className="text-container">
          <p className="main-text">
            Todas as informações que você ceder para mim serão usadas para
            fornecer uma melhor consulta médica para você! Ao clicar para abrir
            o formulário você concorda com a nossa{" "}
            <a
              href="https://i9.med.br/termos-de-uso-da-plataforma-i9med-saude-digital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de proteção de dados e privacidade
            </a>
            .
          </p>
          <div className="form-button-container">
            {!isButtonClicked && (
              <button className="form-button" onClick={handleExternalLink}>
                Abrir Formulário
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (isRegister === "true") {
    return (
      <div className="App">
        {errorMessage || content}
        {isIframeVisible && (
          <iframe
            key={parameter}
            src={`https://www.appsheet.com/start/9293a301-0003-4c4e-8cf6-502fa2810eb0#appName=Galileu_-640720421&view=Formul%C3%A1rio&defaults=${parameter}`}
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
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        )}
      </div>
    );
  } else {
    return (
      <div className="App">
        {errorMessage || content}
        {isIframeVisible && (
          <iframe
            key={parameter}
            src={`https://www.appsheet.com/start/e81f77d3-5b6c-4408-a07e-ae254943a988#appName=Galileu_backup-640720421&view=Formul%C3%A1rio&defaults=${parameter}`}
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
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        )}
      </div>
    );
  }
};

export default PatientList;
