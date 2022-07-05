import React, { useEffect, useState } from "react";
import "./Individual.css";

const Pokemon = ({ pokemon, key }) => {
  const [pokemonInformation, setPokemonInformation] = useState({
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
      setPokemonInformation({
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

  return !pokemonInformation ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <tr>
        <td>{`#${pokemonInformation.id}`}</td>
        <td>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInformation.id}.png`}
            alt={`${pokemon.name}`}
          />
        </td>
        <td>
          <p className="pokemon-name" onClick={() => setMoreInfo(!moreInfo)}>
            {pokemon.name}
          </p>
        </td>
        {pokemonInformation.types.map(slot => {
          return <td className={`type ${slot.type.name}`}>{slot.type.name}</td>;
        })}
      </tr>
      {moreInfo === true && (
        <tr className="more-info">
          <td colSpan={2}>
            <h4>Base Stats:</h4>
            {pokemonInformation.stats.map(slot => {
              return (
                <p className={`abilities`}>
                  {slot.stat.name}:&nbsp;{slot.base_stat}
                </p>
              );
            })}
          </td>
          <td>
            <h4>Abilities:</h4>
            {pokemonInformation.abilities.map(slot => {
              return <p className={`abilities`}>{slot.ability.name}</p>;
            })}
          </td>
          <td>
            <h4 className="info-number">Base Exp:&nbsp;</h4>
            <p className="info-number">{pokemonInformation.experience}</p>
          </td>
          <td>
            <div>
              <h4 className="info-number">Height:&nbsp;</h4>
              <p className="info-number">{pokemonInformation.height / 10} m</p>
            </div>
            <div>
              <h4 className="info-number">Weight:&nbsp;</h4>
              <p className="info-number">{pokemonInformation.weight / 10} kg</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Pokemon;
