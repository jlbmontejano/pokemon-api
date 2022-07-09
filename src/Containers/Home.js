import React from "react";
import "./Containers.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>WELCOME TO THIS</h1>
        <img
          src={process.env.PUBLIC_URL + "/images/pokemon-logo.svg"}
          alt="pokemon logo"
        />
        <h1>WEBSITE!</h1>
      </div>
      <div>
        <p>
          On this website, you'll be able to search for Pokemon, types of
          Pokemon and moves available to Pokemon
        </p>
      </div>
      <div className="footer">
        <p>
          Project made by
          <a href="https://github.com/jlbmontejano"> Jorge Buenrostro</a>.
        </p>
        <p>Made for educational purposes only.</p>
        <p>
          API used:
          <a href="https://pokeapi.co/"> Pokeapi</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
