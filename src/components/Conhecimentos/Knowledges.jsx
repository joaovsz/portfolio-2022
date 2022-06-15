import React from "react";
import Badges from "../Card/Badges";
import { dataCards } from "../db/database";
import "./Knowledges.css";
const Knowledges = () => {
  return (
    <>
      <hr></hr>
      <section className="Conhecimentos">
        <h2>Conhecimentos</h2>
        <div className="card-container">
          {data.map((data) => (
            <Badges key={data.name} title={data.name} image={data.img} />
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Knowledges;
