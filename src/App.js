import { useState } from "react";
import Home from "./Containers/Home";
import PokemonList from "./Containers/PokemonList";
import TypesList from "./Containers/TypesList";
import MovesList from "./Containers/MovesList";
import AbilitiesList from "./Containers/AbilitiesList";
import Navigation from "./Components/Navigation";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("pokemon");
  return (
    <div className="App">
      <Navigation setCurrentPage={setCurrentPage} />
      {currentPage === "home" ? (
        <Home />
      ) : currentPage === "pokemon" ? (
        <PokemonList />
      ) : currentPage === "types" ? (
        <TypesList />
      ) : currentPage === "moves" ? (
        <MovesList />
      ) : (
        <AbilitiesList />
      )}
    </div>
  );
};

export default App;
