import React, { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";
import Pokemon from "../Components/Pokemon";
import Buttons from "../Components/Buttons";
import "./PokemonList.css";

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`)
      .then(res => res.json())
      .then(data => setPokemons(data.results))
      .catch(err => console.error(err));
  }, [offset]);

  const handleChange = event => {
    setSearchfield(event.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.includes(searchfield.toLowerCase())
  );

  return !pokemons && filteredPokemons.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pokemon-logo.svg"}
            alt="pokemon logo"
          />
        </div>
        <p>Search for a Pokemon on the current page:</p>
        <input type="text" onChange={handleChange} />
      </div>
      <Buttons offset={offset} setOffset={setOffset} />

      <div className="notes">
        <p>
          Currently displaying #{offset + 1} - #{offset + 25}
        </p>
        <p>Note: Click on a Pokemon's name to show more info</p>
      </div>
      <table>
        <thead>
          <tr>
            <th className="th-entry">Entry</th>
            <th className="th-image">Image</th>
            <th className="th-name">Name</th>
            <th className="th-type">Type 1</th>
            <th className="th-type">Type 2</th>
          </tr>
        </thead>
        <tbody>
          {filteredPokemons.length !== 0 ? (
            filteredPokemons.map(pokemon => {
              return <Pokemon pokemon={pokemon} />;
            })
          ) : (
            <tr>
              <td colSpan={5}>NO RESULTS AVAILABLE</td>
            </tr>
          )}
        </tbody>
      </table>
      <Buttons offset={offset} setOffset={setOffset} />
    </div>
  );
};

export default PokemonList;
