import React from "react";
import PortItem from "../components/PortItem";
import portArray from "../components/portArray.json";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolioLayout">
        {portArray != null
          ? portArray.map((piece) => <PortItem piece={piece} key={piece.id} />)
          : "Oh no. That didn't work"}
      </div>
    </div>
  );
};

export default Portfolio;
