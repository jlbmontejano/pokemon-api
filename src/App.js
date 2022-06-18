import { useState, useEffect } from "react";
import Pokemon from "./Components/Pokemon";
import "./App.css";

const App = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
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
        <input
          type="text"
          placeholder="SEARCH FOR A POKEMON..."
          onChange={handleChange}
        />
      </div>
      <div className="button-section">
        {offset === 0 ? (
          <button disabled>&lt;&lt;&nbsp;Previous</button>
        ) : (
          <button
            onClick={() => {
              setOffset(offset - 20);
              window.scrollTo(0, 0);
            }}
          >
            &lt;&lt;&nbsp;Previous
          </button>
        )}
        <button
          onClick={() => {
            setOffset(offset + 20);
            window.scrollTo(0, 0);
          }}
        >
          Next&nbsp;&gt;&gt;
        </button>
      </div>
      <div className="header">
        <h3>Entry</h3>
        <h3>Image</h3>
        <h3>Name</h3>
        <div className="type-divider">
          <h3>Type 1</h3>
          <h3>Type 2</h3>
        </div>
      </div>
      <div>
        {filteredPokemons.map(pokemon => {
          return <Pokemon pokemon={pokemon} />;
        })}
      </div>
      <div className="button-section">
        {offset === 0 ? (
          <button disabled>&lt;&lt;&nbsp;Previous</button>
        ) : (
          <button
            onClick={() => {
              setOffset(offset - 20);
              window.scrollTo(0, 0);
            }}
          >
            &lt;&lt;&nbsp;Previous
          </button>
        )}
        <button
          onClick={() => {
            setOffset(offset + 20);
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
