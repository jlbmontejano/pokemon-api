import React, { useState, useEffect } from "react";
import Buttons from "../Components/Buttons";
import Type from "../Components/Type";
import "./TypesList.css";

const TypesList = () => {
  const [types, setTypes] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type`)
      .then(res => res.json())
      .then(data => setTypes(data.results))
      .catch(err => console.error(err));
  }, []);

  const handleChange = event => {
    setSearchfield(event.target.value);
  };

  const filteredTypes = types.filter(type =>
    type.name.includes(searchfield.toLowerCase())
  );

  return !types && filteredTypes.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pokemon-logo.svg"}
            alt="pokemon logo"
          />
        </div>
        <p>Search on the current page:</p>
        <input type="text" onChange={handleChange} />
      </div>
      <Buttons />
      <table>
        <thead>
          <tr>
            <th className="th-types-entry">ID:</th>
            <th className="th-types-type">Type:</th>
            <th className="th-types-damage">Double Damage From:</th>
            <th className="th-types-damage">Double Damage To:</th>
            <th className="th-types-damage">Half Damage From:</th>
            <th className="th-types-damage">Half Damage To:</th>
            <th className="th-types-damage">No Damage From:</th>
            <th className="th-types-damage">No Damage To:</th>
          </tr>
        </thead>
        <tbody>
          {filteredTypes.length !== 0 ? (
            filteredTypes.map(type => {
              return <Type type={type} />;
            })
          ) : (
            <tr>
              <td colSpan={5}>NO RESULTS AVAILABLE</td>
            </tr>
          )}
        </tbody>
      </table>
      <Buttons />
    </div>
  );
};

export default TypesList;
