import React from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import { cards } from "../db/database";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Projects = () => {
  return (
    <div id="projects-container">
      {cards.map((cards) => (
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="130" image={cards.img} />
            <CardContent>
              <h4>{cards.title}</h4>
              <p>{cards.description}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
