import React, { useState } from "react";
import "./Individual.css";

const Type = ({ type, key }) => {
  const [typeInformation, setTypeInformation] = useState({
    name: type.name,
    id: "",
    double_damage_from: [],
    double_damage_to: [],
    half_damage_from: [],
    half_damage_to: [],
    no_damage_from: [],
    no_damage_to: [],
  });

  fetch(`https://pokeapi.co/api/v2/type/${type.name}`)
    .then(res => res.json())
    .then(data => {
      setTypeInformation({
        id: data.id,
        double_damage_from: data.damage_relations.double_damage_from,
        double_damage_to: data.damage_relations.double_damage_to,
        half_damage_from: data.damage_relations.half_damage_from,
        half_damage_to: data.damage_relations.half_damage_to,
        no_damage_from: data.damage_relations.no_damage_from,
        no_damage_to: data.damage_relations.no_damage_to,
      });
    })
    .catch(err => console.error(err));

  return !typeInformation ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <tr id={`${type.name}`} key={key}>
      <td>{`#${typeInformation.id}`}</td>
      <td className={`type ${type.name}`}>{`${type.name}`}</td>
      <td className="inside-table-damage">
        {typeInformation.double_damage_from.map(damage => {
          return (
            <td className={`type ${damage.name}`}>
              <a href={`#${damage.name}`}>{damage.name}</a>
            </td>
          );
        })}
      </td>
      <td className="inside-table-damage">
        {typeInformation.double_damage_to.map(damage => {
          return (
            <td className={`type ${damage.name}`}>
              <a href={`#${damage.name}`}>{damage.name}</a>
            </td>
          );
        })}
      </td>
      <td className="inside-table-damage">
        {typeInformation.half_damage_from.map(damage => {
          return (
            <td className={`type ${damage.name}`}>
              <a href={`#${damage.name}`}>{damage.name}</a>
            </td>
          );
        })}
      </td>
      <td className="inside-table-damage">
        {typeInformation.half_damage_to.map(damage => {
          return (
            <td className={`type ${damage.name}`}>
              <a href={`#${damage.name}`}>{damage.name}</a>
            </td>
          );
        })}
      </td>
      <td className="inside-table-damage">
        {typeInformation.no_damage_from.map(damage => {
          return (
            <td className={`type ${damage.name}`}>
              <a href={`#${damage.name}`}>{damage.name}</a>
            </td>
          );
        })}
      </td>
      <td className="inside-table-damage">
        {typeInformation.no_damage_to.map(damage => {
          return (
            <td className={`type ${damage.name}`}>
              <a href={`#${damage.name}`}>{damage.name}</a>
            </td>
          );
        })}
      </td>
    </tr>
  );
};

export default Type;
