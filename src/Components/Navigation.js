import React from "react";
import "./Components.css";

const Navigation = ({
  setAllResults,
  setFilteredResults,
  setCurrentPage,
  offset,
  setOffset,
}) => {
  const handleChange = option => {
    setAllResults([]);
    setFilteredResults([]);
    setOffset(0);
    setCurrentPage(option);
    handleFetch(option);
  };

  const handleFetch = option => {
    fetch(`https://pokeapi.co/api/v2/${option}?limit=25&offset=${offset}`)
      .then(res => res.json())
      .then(data => {
        setAllResults(data.results);
        setFilteredResults(data.results);
      })
      .catch(err => console.error(err));
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
