import React, { useState, useContext } from "react";
import { PageContext } from "../App";
import "./Components.css";

const Searchfield = () => {
  const { allResults, setFilteredResults } = useContext(PageContext);

  const [searchfield, setSearchfield] = useState("");

  const handleChange = event => {
    setSearchfield(event.target.value);

    if (event.target.value !== "") {
      setFilteredResults(
        allResults.filter(entry =>
          entry.name.includes(searchfield.toLowerCase())
        )
      );
    } else {
      setFilteredResults(allResults);
    }
  };

  return (
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
  );
};

export default Searchfield;
