import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header>
        <div className="headerContainer">
            <img src="../images/minimalLogoWhite.svg" id="logo"></img>
            <ul>
                <li>Projetos</li>
                <li>Conhecimentos</li>
                <li>Quem Sou</li>
            </ul>
            <button>Contato</button>
        </div>
    </header>
  )
}

export default Header