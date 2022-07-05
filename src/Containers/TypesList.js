import React from "react";
import Type from "./Individual/Type";
import "./Containers.css";

const TypesList = ({ allResults, filteredResults }) => {
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
              return <Type type={type} key={type.name} />;
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
