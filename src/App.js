import { useState } from "react";
import Navigation from "./Components/Navigation";
import Searchfield from "./Components/Searchfield";
import Buttons from "./Components/Buttons";
import Home from "./Containers/Home";
import PokemonList from "./Containers/PokemonList";
import TypesList from "./Containers/TypesList";
import MovesList from "./Containers/MovesList";
import AbilitiesList from "./Containers/AbilitiesList";
import "./App.css";

const App = () => {
  const initialState = {
    allResults: [],
    filteredResults: [],
    offset: [],
  };
  const [currentPage, setCurrentPage] = useState("pokemon");
  const [shownInfo, setShownInfo] = useState(initialState);
  // const [allResults, setAllResults] = useState([]);
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [offset, setOffset] = useState(0);
  return (
    <div className="App">
      <Navigation setCurrentPage={setCurrentPage} setOffset={setOffset} />
      {currentPage === "home" ? (
        <Home />
      ) : (
        <>
          <Searchfield
            allResults={allResults}
            setAllResults={setAllResults}
            filteredResults={filteredResults}
            setFilteredResults={setFilteredResults}
          />
          <Buttons offset={offset} setOffset={setOffset} />
          {currentPage === "pokemon" ? (
            <PokemonList
              allResults={allResults}
              setAllResults={setAllResults}
              filteredResults={filteredResults}
              setFilteredResults={setFilteredResults}
              offset={offset}
            />
          ) : currentPage === "types" ? (
            <TypesList
              allResults={allResults}
              setAllResults={setAllResults}
              filteredResults={filteredResults}
              setFilteredResults={setFilteredResults}
              offset={offset}
            />
          ) : currentPage === "moves" ? (
            <MovesList
              allResults={allResults}
              setAllResults={setAllResults}
              filteredResults={filteredResults}
              setFilteredResults={setFilteredResults}
              offset={offset}
            />
          ) : (
            <AbilitiesList
              allResults={allResults}
              setAllResults={setAllResults}
              filteredResults={filteredResults}
              setFilteredResults={setFilteredResults}
              offset={offset}
            />
          )}
          <Buttons offset={offset} setOffset={setOffset} />
        </>
      )}
    </div>
  );
};

export default App;
