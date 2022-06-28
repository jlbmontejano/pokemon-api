import React from "react";
import "./Components.css";

const Navigation = ({
  setCurrentPage,
  setOffset,
}) => {
  const handleChange = option => {
    setOffset(0);
    setCurrentPage(option);
  };

  return (
    <nav>
      <p className="navigation-home" onClick={() => handleChange("home")}>
        Home
      </p>
      <p className="navigation-pokedex" onClick={() => handleChange("pokemon")}>
        Pokemon
      </p>
      <p className="navigation-types" onClick={() => handleChange("type")}>
        Types
      </p>
      <p className="navigation-moves" onClick={() => handleChange("move")}>
        Moves
      </p>
    </nav>
  );
};

export default Navigation;
