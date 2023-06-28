import React from 'react';
import logo from './../../assets/galileu_azul.png';
import "./index.css"

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <img src={logo} alt="Logo" className="logo" style={{ marginBottom: "100px" }} />
      <h2>Obrigado por preencher o formulário!</h2>
      <p>Valorizamos sua contribuição e entraremos em contato em breve.</p>
    </div>
  );
};

export default ThankYouPage;
