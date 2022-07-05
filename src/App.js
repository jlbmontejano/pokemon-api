import { useState } from "react";
import Navigation from "./Components/Navigation";
import Searchfield from "./Components/Searchfield";
import Buttons from "./Components/Buttons";
import Home from "./Containers/Home";
import PokemonList from "./Containers/PokemonList";
import TypesList from "./Containers/TypesList";
import MovesList from "./Containers/MovesList";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [allResults, setAllResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [offset, setOffset] = useState(0);

  return (
    <div className="App">
      <Navigation
        setAllResults={setAllResults}
        setFilteredResults={setFilteredResults}
        setCurrentPage={setCurrentPage}
        offset={offset}
        setOffset={setOffset}
      />
      {currentPage === "home" ? (
        <Home />
      ) : (
        <>
          <Searchfield
            allResults={allResults}
            setFilteredResults={setFilteredResults}
          />
          <Buttons
            offset={offset}
            setOffset={setOffset}
            currentPage={currentPage}
          />
          {currentPage === "pokemon" ? (
            <PokemonList
              allResults={allResults}
              filteredResults={filteredResults}
              offset={offset}
            />
          ) : currentPage === "type" ? (
            <TypesList
              allResults={allResults}
              filteredResults={filteredResults}
            />
          ) : currentPage === "move" ? (
            <MovesList
              allResults={allResults}
              filteredResults={filteredResults}
              offset={offset}
            />
          ) : (
            <></>
          )}
          <Buttons
            offset={offset}
            setOffset={setOffset}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
