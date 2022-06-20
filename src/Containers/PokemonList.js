import React, { useEffect } from "react";
import Pokemon from "../Components/Pokemon";
import "./PokemonList.css";

const PokemonList = ({
  allResults,
  setAllResults,
  filteredResults,
  setFilteredResults,
  offset,
}) => {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`)
      .then(res => res.json())
      .then(data => {
        setAllResults(data.results);
        setFilteredResults(allResults);
      })
      .catch(err => console.error(err));
  }, [offset]);

  return !allResults === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
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
          {filteredResults.length !== 0 ? (
            filteredResults.map(pokemon => {
              return <Pokemon pokemon={pokemon} />;
            })
          ) : (
            <tr>
              <td colSpan={5}>NO RESULTS AVAILABLE</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;
