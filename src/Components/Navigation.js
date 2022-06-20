import React from "react";
import "./Navigation.css";

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav>
      <p className="navigation-home" onClick={() => setCurrentPage("home")}>
        Home
      </p>
      <p
        className="navigation-pokedex"
        onClick={() => setCurrentPage("pokemon")}
      >
        Pokemon
      </p>
      <p className="navigation-types" onClick={() => setCurrentPage("types")}>
        Types
      </p>
      <p className="navigation-moves" onClick={() => setCurrentPage("moves")}>
        Moves
      </p>
      <p
        className="navigation-abilities"
        onClick={() => setCurrentPage("abilities")}
      >
        Abilities
      </p>
    </nav>
  );
};

export default Navigation;
