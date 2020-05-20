import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const TechIcons = () => {
  return (
    <div className="row">
      <ul>
        <li>
          <FontAwesomeIcon icon={faCoffee} />
        </li>
      </ul>
    </div>
  );
};

export default TechIcons;
