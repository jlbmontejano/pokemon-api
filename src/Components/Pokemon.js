import React, { useState } from "react";
import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  const [types, setTypes] = useState([]);
  const [id, setId] = useState();
  const [abilities, setAbilities] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then(res => res.json())
    .then(data => {
      setTypes(data.types);
      setId(data.id);
      setAbilities(data.abilities);
      setHeight(data.height);
      setWeight(data.weight);
    })
    .catch(err => console.error(err));

  return !types || !id ? (
    <></>
  ) : (
    <tr>
      <td>{`#${id}`}</td>
      <td>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={`${pokemon.name}`}
        />
      </td>
      <td>{pokemon.name}</td>
      {types.map(slot => {
        return <td className={`type ${slot.type.name}`}>{slot.type.name}</td>;
      })}
    </tr>
  );
};

export default Pokemon;
