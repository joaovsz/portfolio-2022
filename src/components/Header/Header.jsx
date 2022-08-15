import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Header.css"
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
        <div className="headerContainer">
            <img src="../images/minimalLogoWhite.svg" id="logo"></img>
            <ul className="ulHeader">
               <li><a className="link" href="#Apresentation">
               Quem Sou
              </a></li>
             <li> <a className="link" href="#projects-container">
                Projetos
              </a></li>
             <li> <a className="link" href="#Conhecimentos">
                Conhecimentos
              </a></li>
            </ul>
            <Button
        id="contact"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Contato
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><EmailIcon/><a target="_blank" href="mailto:joaovitor1713coin@gmail.com">E-mail</a></MenuItem>
        <MenuItem onClick={handleClose}><LinkedInIcon/><a target="_blank" href="https://www.linkedin.com/in/joao-vitorsouza/">LinkedIn</a></MenuItem>
        <MenuItem onClick={handleClose}><WhatsAppIcon/><a target="_blank"
        href="https://wa.me/5562992490411">Whatsapp</a></MenuItem>
      </Menu>
    </div>
        
    </header>
  )
}

export default Header