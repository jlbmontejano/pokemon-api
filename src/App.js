import { useState, useEffect } from "react";
import Pokemon from "./Components/Pokemon";
import "./App.css";

const App = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`)
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

  return !pokemons ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pokemon-logo.svg"}
            alt="pokemon logo"
          />
        </div>
        <p>SEARCH FOR A POKEMON:</p>
        <input type="text" onChange={handleChange} />
      </div>
      <div className="button-section">
        {offset === 0 ? (
          <button disabled>&lt;&lt;&nbsp;Previous</button>
        ) : (
          <button
            onClick={() => {
              setOffset(offset - 50);
              window.scrollTo(0, 0);
            }}
          >
            &lt;&lt;&nbsp;Previous
          </button>
        )}
        <button
          onClick={() => {
            setOffset(offset + 50);
            window.scrollTo(0, 0);
          }}
        >
          Next&nbsp;&gt;&gt;
        </button>
      </div>
      <div>
        <p>Click on a Pokemon's name to show more info...</p>
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
            <td colSpan={5}>NO RESULTS AVAILABLE</td>
          )}
        </tbody>
      </table>
      <div className="button-section">
        {offset === 0 ? (
          <button disabled>&lt;&lt;&nbsp;Previous</button>
        ) : (
          <button
            onClick={() => {
              setOffset(offset - 50);
              window.scrollTo(0, 0);
            }}
          >
            &lt;&lt;&nbsp;Previous
          </button>
        )}
        <button
          onClick={() => {
            setOffset(offset + 50);
            window.scrollTo(0, 0);
          }}
        >
          Next&nbsp;&gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default App;
