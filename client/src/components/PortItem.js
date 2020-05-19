import React from "react";
import tempImage from "../assets/ID_logo192_circular.png";

const PortItem = ({ piece }) => {
  console.log(piece);
  return (
    <div className="card small">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={tempImage}
          alt="oh no. remind me to fix this"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {piece.title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p className="demoLinks">
          {piece.repo ? <a href={piece.repo}>Repo</a> : ""}
          {piece.live ? <a href={piece.live}>Demo</a> : ""}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {piece.title}
          <i className="material-icons right">close</i>
        </span>
        <p>{piece.description}</p>
      </div>
    </div>
  );
};

export default PortItem;
