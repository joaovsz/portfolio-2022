import React from 'react'
import "./Apresentation.css"
const MainContainer = () => {
  return (
    <section id="Apresentation">
        <div className="Container">
            <div className="Description">
              <h2>Seja bem vindo!</h2>
              <p>Me chamo João Vitor, tenho 19 anos, sou Desenvolvedor Web Front-End apaixonado por criar soluções em forma de código!
               Abaixo você poderá ler um pouco sobre mim e alguns projetos desenvolvidos com meu conhecimento em programação.</p>
              
               </div>
            <div>
              <div id="imageContainer">
                <img id="image" src="../images/pcWeb.svg"></img>
              </div>
                
            </div>
        </div>
    </section>
  )
}

export default MainContainer