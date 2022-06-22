import React, { useEffect, useState } from "react";
import "./Individual.css";

const Pokemon = ({ pokemon }) => {
  const [information, setInformation] = useState({
    name: pokemon.name,
    types: [],
    id: "",
    abilities: [],
    height: 0,
    weight: 0,
    experience: 0,
    stats: [],
  });
  const [moreInfo, setMoreInfo] = useState(false);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then(res => res.json())
    .then(data => {
      setInformation({
        types: data.types,
        id: data.id,
        abilities: data.abilities,
        height: data.height,
        weight: data.weight,
        experience: data.base_experience,
        stats: data.stats,
      });
    })
    .catch(err => console.error(err));

  useEffect(() => {
    setMoreInfo(false);
  }, [pokemon.name]);

  return !information.types || !information.id ? (
    <></>
  ) : (
    <>
      <tr>
        <td>{`#${information.id}`}</td>
        <td>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${information.id}.png`}
            alt={`${pokemon.name}`}
          />
        </td>
        <td>
          <p className="pokemon-name" onClick={() => setMoreInfo(!moreInfo)}>
            {pokemon.name}
          </p>
        </td>
        {information.types.map(slot => {
          return <td className={`type ${slot.type.name}`}>{slot.type.name}</td>;
        })}
      </tr>
      {moreInfo === true && (
        <tr className="more-info">
          <td colSpan={2}>
            <h4>Base Stats:</h4>
            {information.stats.map(slot => {
              return (
                <p className={`abilities`}>
                  {slot.stat.name}:&nbsp;{slot.base_stat}
                </p>
              );
            })}
          </td>
          <td>
            <h4>Abilities:</h4>
            {information.abilities.map(slot => {
              return <p className={`abilities`}>{slot.ability.name}</p>;
            })}
          </td>
          <td>
            <h4 className="info-number">Base Exp:&nbsp;</h4>
            <p className="info-number">{information.experience}</p>
          </td>
          <td>
            <div>
              <h4 className="info-number">Height:&nbsp;</h4>
              <p className="info-number">{information.height / 10} m</p>
            </div>
            <div>
              <h4 className="info-number">Weight:&nbsp;</h4>
              <p className="info-number">{information.weight / 10} kg</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Pokemon;