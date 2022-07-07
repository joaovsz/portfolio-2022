import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header>
        <div className="headerContainer">
            <img src="../images/minimalLogoWhite.svg" id="logo"></img>
            <ul className="ulHeader">
             <li> <a className="link" href="#projects-container">
                Projetos
              </a></li>
             <li> <a className="link" href="#Conhecimentos">
                Conhecimentos
              </a></li>
               <li><a className="link" href="#Apresentation">
               Quem Sou
              </a></li>
            </ul>
            <button id="contact">Contato</button>
        </div>
    </header>
  )
}

export default Header