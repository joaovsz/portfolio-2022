import React from "react";
import "./Badges.css";
const Badges = ({ image, className }) => {
  return (
  <div className={className}>
    <img className="badges" src={image}></img>
    </div>
  );
};

export default Badges;
