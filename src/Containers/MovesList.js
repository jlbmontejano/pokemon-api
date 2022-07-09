import React, { useContext } from "react";
import { PageContext } from "../App";
import Move from "./Individual/Move";
import "./Containers.css";

const MovesList = () => {
  const { allResults, filteredResults, offset } = useContext(PageContext);

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
              return <Move move={move} key={move.name} />;
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
