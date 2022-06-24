import React from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import { cards } from "../db/database";
import CardContent from "@mui/material/CardContent";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, IconButton } from "@mui/material";
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
      <h2>Projetos desenvolvidos</h2>
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
