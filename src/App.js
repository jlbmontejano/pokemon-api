import { useState, createContext } from "react";
import Navigation from "./Components/Navigation";
import Searchfield from "./Components/Searchfield";
import Buttons from "./Components/Buttons";
import Home from "./Containers/Home";
import PokemonList from "./Containers/PokemonList";
import TypesList from "./Containers/TypesList";
import MovesList from "./Containers/MovesList";
import "./App.css";

export const PageContext = createContext();

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [allResults, setAllResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [offset, setOffset] = useState(0);

  return (
    <div className="App">
      <PageContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          allResults,
          setAllResults,
          filteredResults,
          setFilteredResults,
          offset,
          setOffset,
        }}
      >
        <Navigation />
        {currentPage === "home" ? (
          <Home />
        ) : (
          <>
            <Searchfield />
            <Buttons />
            {currentPage === "pokemon" ? (
              <PokemonList />
            ) : currentPage === "type" ? (
              <TypesList />
            ) : currentPage === "move" ? (
              <MovesList />
            ) : (
              <></>
            )}
            <Buttons />
          </>
        )}
      </PageContext.Provider>
    </div>
  );
};

export default App;
