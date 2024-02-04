import React from "react";
import Badges from "../Card/Badges";
import { dataCards } from "../db/database";
import "./Knowledges.css";
const Knowledges = () => {

  return (
    <>

      <section className="Conhecimentos" id="Conhecimentos">
        <div className="descricao">
          <h2>Conhecimentos</h2>
          <div className="knowledges">
          <p className="resume">Todo bom desenvolvedor tem com ele uma história de como e quando surgiu o interesse pela programação, e comigo não é diferente.
            Há poucos anos atrás (2020) eu já trabalhava com soluções visuais utilizando CorelDraw e Photoshop
            criando artes para mídia social e fachadas para algumas empresas. 
            </p>
            <p className="resume">Com passar do tempo fui descobrindo
            novas áreas voltadas para criação, e uma delas foi a que mais me chamou a atenção no último ano (2021), o desenvolvimento
            web voltado para Front-end que me foi apresentado na faculdade. Em seguida comecei os meus estudos na área do Front-End, começando pela tríade
            base (HTML,CSS e JAVASCRIPT) fazendo alguns cursos gratuitos disponíveis na internet e desenvolvendo projetos para solidificar meu aprendizado.
              </p>  
              <p className="resume">
            Com o desenvolvimento destes projetos também vem a necessidade ter um controle das modificações que são feitas utiliza-se um versionador de código, e para isso
            escolhi o Git. Ao passar do tempo e quanto mais se escreve código você vê a grande quantidade de tempo que se gasta para desenvolver pequenas funcionalidades e com esse problema
            percebe-se a necessidade de ser mais produtivo, sendo assim a solução é utilizar um framework ou uma biblioteca para acelerar a produção do projeto, que neste caso optei por utilizar o REACT.
              </p>
          
          <span className="levels">
            <h4> &nbsp;&bull; Tempo de estudo</h4>
            <span>
              <ul id="time-level">
                <li>HTML e CSS: 3 anos</li>
                <li>JAVASCRIPT: 3 anos</li>
                <li>Git: 3 anos</li>
                <li>SQL: 8 meses</li>
                <li>StoryBook: 3 meses</li>
                <li>Figma: 7 meses</li>
                <li>Typescript: 1 ano</li>
                <li>React: 2 anos</li>
                <li>Redux: 1 ano</li>
                <li>Node (Api's): 6 meses</li>
                <li>Java/Spring: 7 meses</li>
                
                
              </ul>
            </span>
          </span>
          </div>
        </div>
        <div className="card-container">
          {dataCards.map((data) => (
            <Badges key={data.name} title={data.name} image={data.img} className={data.name} />
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Knowledges;
