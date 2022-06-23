import React, { useEffect } from "react";
import Type from "./Individual/Type";
import "./Containers.css";

const TypesList = ({
  allResults,
  setAllResults,
  filteredResults,
  setFilteredResults,
  offset,
}) => {
  const handleFetch = () => {
    fetch(`https://pokeapi.co/api/v2/type?limit=25&offset=${offset}`)
      .then(res => res.json())
      .then(data => {
        setAllResults(data.results);
        setFilteredResults(allResults);
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    handleFetch();
  }, []);
  useEffect(() => {
    handleFetch();
  }, [offset]);

  return allResults.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div className="notes">
        <p>Currently displaying all available types.</p>
      </div>
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
          {filteredResults.length !== 0 ? (
            filteredResults.map(type => {
              return <Type type={type} />;
            })
          ) : (
            <tr>
              <td colSpan={8}>NO RESULTS AVAILABLE</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TypesList;
