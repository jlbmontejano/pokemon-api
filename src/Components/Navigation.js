import React from "react";
import "./Navigation.css";

const Navigation = ({ setCurrentPage, setOffset }) => {
  const handleChange = option => {
    setCurrentPage(option);
    setOffset(0);
  };

  return (
    <nav>
      <p className="navigation-home" onClick={() => handleChange("home")}>
        Home
      </p>
      <p className="navigation-pokedex" onClick={() => handleChange("pokemon")}>
        Pokemon
      </p>
      <p className="navigation-types" onClick={() => handleChange("types")}>
        Types
      </p>
      <p className="navigation-moves" onClick={() => handleChange("types")}>
        Moves
      </p>
      <p
        className="navigation-abilities"
        onClick={() => handleChange("abilities")}
      >
        Abilities
      </p>
    </nav>
  );
};

export default Navigation;
