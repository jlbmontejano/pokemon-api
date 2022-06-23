import React, { useEffect } from "react";
import Move from "./Individual/Move";
import "./Containers.css";

const MovesList = ({
  allResults,
  setAllResults,
  filteredResults,
  setFilteredResults,
  offset = 0,
}) => {
  const handleFetch = () => {
    fetch(`https://pokeapi.co/api/v2/move?limit=25&offset=${offset}`)
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
        <p>
          Currently displaying #{offset + 1} - #{offset + 25}
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th className="th-moves-name">Name</th>
            <th className="th-moves-type">Type</th>
            <th className="th-moves-power">Power</th>
            <th className="th-moves-pp">PP</th>
            <th className="th-moves-accuracy">Accuracy</th>
            <th className="th-moves-damage-class">Damage Class</th>
            <th className="th-moves-effect">Effect</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.length !== 0 ? (
            filteredResults.map(move => {
              return <Move move={move} />;
            })
          ) : (
            <tr>
              <td colSpan={7}>NO RESULTS AVAILABLE</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovesList;
