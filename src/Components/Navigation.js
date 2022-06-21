import React from "react";
import "./Components.css";

const Navigation = ({
  setCurrentPage,
  setAllResults,
  setFilteredResults,
  setOffset,
}) => {
  const handleChange = option => {
    setAllResults([]);
    setFilteredResults([]);
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
      <p className="navigation-types" onClick={() => handleChange("types")}>
        Types
      </p>
      <p className="navigation-moves" onClick={() => handleChange("moves")}>
        Moves
      </p>
    </nav>
  );
};

export default Navigation;
