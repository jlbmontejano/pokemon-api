import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <p className="navigation-home">Home</p>
      <p className="navigation-pokedex">Pokemon</p>
      <p className="navigation-types">Types</p>
      <p className="navigation-moves">Moves</p>
      <p className="navigation-abilities">Abilities</p>
    </nav>
  );
};

export default Navigation;
