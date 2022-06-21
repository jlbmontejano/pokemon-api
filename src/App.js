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
        setCurrentPage={setCurrentPage}
        setAllResults={setAllResults}
        setFilteredResults={setFilteredResults}
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
            <></>
          )}
          <Buttons offset={offset} setOffset={setOffset} />
        </>
      )}
    </div>
  );
};

export default App;
