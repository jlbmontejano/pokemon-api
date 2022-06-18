import React, { useState } from "react";
import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  const [types, setTypes] = useState([]);
  const [id, setId] = useState();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then(res => res.json())
    .then(data => {
      setTypes(data.types);
      setId(data.id);
    })
    .catch(err => console.error(err));

  return !types || !id ? (
    <></>
  ) : (
    <div className="row">
      <p>{`#${id}`}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={`${pokemon.name}`}
      />
      <p>{pokemon.name}</p>
      <div className="type-divider">
        {types.map(slot => {
          return <p className={`type ${slot.type.name}`}>{slot.type.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Pokemon;
