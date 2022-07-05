import React, { useState } from "react";
import "./Individual.css";

const Move = ({ move, key }) => {
  const [moveInformation, setMoveInformation] = useState({
    name: move.name,
    type: "",
    power: 0,
    pp: 0,
    accuracy: 0,
    damage_class: "",
    effect: "",
  });

  fetch(`https://pokeapi.co/api/v2/move/${move.name}`)
    .then(res => res.json())
    .then(data => {
      setMoveInformation({
        type: data.type.name,
        power: data.power,
        pp: data.pp,
        accuracy: data.accuracy,
        damage_class: data.damage_class.name,
        effect: data.effect_entries[0].short_effect,
      });
    })
    .catch(err => console.error(err));

  return !moveInformation ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <tr>
        <td>{move.name}</td>
        <td className={`type ${moveInformation.type}`}>
          {moveInformation.type}
        </td>
        <td>{moveInformation.power}</td>
        <td>{moveInformation.pp}</td>
        <td>{moveInformation.accuracy}</td>
        <td>{moveInformation.damage_class}</td>
        <td className="effect">{moveInformation.effect}</td>
      </tr>
    </>
  );
};

export default Move;
