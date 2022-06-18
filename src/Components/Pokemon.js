import React, { useState } from "react";
import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  const [types, setTypes] = useState([]);
  const [id, setId] = useState();
  const [abilities, setAbilities] = useState([]);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [experience, setExperience] = useState(0);
  const [stats, setStats] = useState([]);
  const [info, setInfo] = useState(false);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then(res => res.json())
    .then(data => {
      setTypes(data.types);
      setId(data.id);
      setAbilities(data.abilities);
      setHeight(data.height);
      setWeight(data.weight);
      setExperience(data.base_experience);
      setStats(data.stats);
    })
    .catch(err => console.error(err));

  return !types || !id ? (
    <></>
  ) : (
    <>
      <tr>
        <td>{`#${id}`}</td>
        <td>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={`${pokemon.name}`}
          />
        </td>
        <td>
          <p className="pokemon-name" onClick={() => setInfo(!info)}>
            {pokemon.name}
          </p>
        </td>
        {types.map(slot => {
          return <td className={`type ${slot.type.name}`}>{slot.type.name}</td>;
        })}
      </tr>
      {info === true && (
        <tr className="more-info">
          <td colSpan={2}>
            <h4>Base Stats:</h4>
            {stats.map(slot => {
              return (
                <p className={`abilities`}>
                  {slot.stat.name}:&nbsp;{slot.base_stat}
                </p>
              );
            })}
          </td>
          <td>
            <h4>Abilities:</h4>
            {abilities.map(slot => {
              return <p className={`abilities`}>{slot.ability.name}</p>;
            })}
            <div>
              <h4 className="info-number">Base Exp:&nbsp;</h4>
              <p className="info-number">{experience}</p>
            </div>
            <div>
              <h4 className="info-number">Height:&nbsp;</h4>
              <p className="info-number">{height / 10} m</p>
            </div>
            <div>
              <h4 className="info-number">Weight:&nbsp;</h4>
              <p className="info-number">{weight / 10} kg</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Pokemon;
