import React, { useState } from "react";

const Searchfield = ({
  allResults,
  setAllResults,
  filteredResults,
  setFilteredResults,
}) => {
  const [searchfield, setSearchfield] = useState("");

  const handleChange = event => {
    setSearchfield(event.target.value);
  };

  filteredResults = allResults.filter(entry =>
    entry.name.includes(searchfield.toLowerCase())
  );

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
