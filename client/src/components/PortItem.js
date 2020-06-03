import React from "react";
import "../assets/colored_transparent.png";
import "../assets/inventoryData.png";
import "../assets/inventoryList.png";
import "../assets/jeopardyAdmin.png";
import "../assets/jeopardyPlay.png";
import "../assets/phoneList.png";
import "../assets/triviaList.png";

const PortItem = ({ piece }) => {
  console.log(piece.image);
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={piece.image}
          alt="oh no. remind me to fix this"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4 ">
          {piece.title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p className="demoLinks">
          {piece.repo ? <a href={piece.repo}>Repo</a> : ""}
          {piece.live ? <a href={piece.live}>Demo</a> : ""}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4 ">
          {piece.title}
          <i className="material-icons right">close</i>
        </span>
        <p>{piece.description}</p>
      </div>
    </div>
  );
};

export default PortItem;
