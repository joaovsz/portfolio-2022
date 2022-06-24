import React from "react";
import "./Apresentation.css";
const MainContainer = () => {
  return (
    <section id="Apresentation">
      <div className="Container">
        <div className="description-card">
          <div className="text-description">
            <h1>Olá,</h1>
            <p>
              Me chamo João Vitor, tenho 19 anos, sou Desenvolvedor Web
              Front-End apaixonado por criar soluções em forma de código! Abaixo
              você poderá ler um pouco sobre mim e alguns projetos desenvolvidos com meu conhecimento em programação.
            </p>
          </div>
        </div>
        
        <div className="img-pc">
          <img src="./images/bg-apresentation_Images/PortfolioPC.svg"></img>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
