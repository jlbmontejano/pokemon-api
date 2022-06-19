import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <p className="navigation-home">
        <a href="#">Home</a>
      </p>
      <p className="navigation-pokedex">
        <a href="#">Pokedex</a>
      </p>
      <p className="navigation-types">
        <a href="#">Types</a>
      </p>
      <p className="navigation-moves">
        <a href="#">Moves</a>
      </p>
      <p className="navigation-abilities">
        <a href="#">Abilities</a>
      </p>
    </nav>
  );
};

export default Navigation;
