import React from "react";
import Pokemon from "./Individual/Pokemon";
import "./Containers.css";

const PokemonList = ({ allResults, filteredResults, offset }) => {
  return allResults.length === 0 ? (
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
            <th className="th-pokemon-entry">Entry</th>
            <th className="th-pokemon-image">Image</th>
            <th className="th-pokemon-name">Name</th>
            <th className="th-pokemon-type">Type 1</th>
            <th className="th-pokemon-type">Type 2</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.length !== 0 ? (
            filteredResults.map(pokemon => {
              return <Pokemon pokemon={pokemon} key={pokemon.name} />;
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
