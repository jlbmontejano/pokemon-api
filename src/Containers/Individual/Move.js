import React, { useState } from "react";
import "./Individual.css";

const Move = ({ move }) => {
  const [information, setInformation] = useState({
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
      setInformation({
        type: data.type.name,
        power: data.power,
        pp: data.pp,
        accuracy: data.accuracy,
        damage_class: data.damage_class.name,
        effect: data.effect_entries[0].short_effect,
      });
    })
    .catch(err => console.error(err));

  return !information ? (
    <></>
  ) : (
    <>
      <tr>
        <td>{move.name}</td>
        <td className={`type ${information.type}`}>{information.type}</td>
        <td>{information.power}</td>
        <td>{information.pp}</td>
        <td>{information.accuracy}</td>
        <td>{information.damage_class}</td>
        <td className="effect">{information.effect}</td>
      </tr>
    </>
  );
};

export default Move;
