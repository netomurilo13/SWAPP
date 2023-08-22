import React from 'react';
import logo1 from './../../assets/galileu_azul.png';
import logo2 from './../../assets/saude.png';
import "./index.css"

const ThankYouPage = () => {

  const currentURL = window.location.href;
  let logoImage;
  if (currentURL.includes("apresentacaohra")) {
    logoImage = logo2;
  } else if(currentURL.includes("%7B%0A%22group%22%3A%20%22Sa%C3%BAde%20da%20Fam%C3%ADlia%20Digital%22%0A%7D")){
    logoImage = logo2;
  }else {
    logoImage = logo1;
  } 

  return (
    <div className="thank-you-page">
      <img src={logoImage} alt="Logo" className="logo" style={{ marginBottom: "100px", height: logoImage === logo1 ? "113px" : "260px", width: logoImage === logo1 ? "283px" : "269px" }} />
      <h2>Obrigado por preencher o formulário!</h2>
      <p>Vamos avaliar as suas informações e logo logo você receberá uma mensagem com o resultado!</p>
    </div>
  );
};

export default ThankYouPage;
