import React, { useState, useEffect } from "react";
import Searchfield from "../Components/Searchfield";
import Pokemon from "../Components/Pokemon";
import Buttons from "../Components/Buttons";
import "./PokemonList.css";

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(allPokemons);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`)
      .then(res => res.json())
      .then(data => setAllPokemons(data.results))
      .catch(err => console.error(err));
  }, [offset]);

  return !allPokemons === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Searchfield
        searchText={"a pokemon"}
        completeArray={allPokemons}
        resultsArray={filteredPokemons}
      />

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
