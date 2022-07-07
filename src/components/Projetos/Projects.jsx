import React from "react";
import "./Projects.css";
import { cards } from "../db/database";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, IconButton } from "@mui/material";
import { useRef } from 'react';

const Projects = () => {
  const carousel = useRef(null)

  function handleLeftClick(e){
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

  }
  function handleRightClick(e){
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <section id="projects-container">
     
      <div className="title-projects">
      <h2>Projetos desenvolvidos</h2>
      </div>
    
      <div className="carousel-content">
        <div className="carousel-Arrow"> 
        <IconButton onClick={handleLeftClick}>
          <ArrowBackIosIcon/>
        </IconButton>
        <IconButton onClick={handleRightClick}>
          <ArrowForwardIosIcon/>
        </IconButton>
        </div>
      <div className="project-content" ref={carousel}>
        {cards.map((card) => (
          <div className="card">
          <img src={card.img}/>
          <div className="description">
          <span className="title">{card.title}</span>
          <p>{card.description}</p>
          <a href={card.link} rel="noreferrer" target="_blank" > <Button variant="outlined" style={{color:"white"}} endIcon={<ArrowForwardIcon/> }>Acessar</Button></a>
          </div>
        </div>
        ))}
        
        </div>
        </div>
        
        </section>
     )
  
};

export default Projects;
