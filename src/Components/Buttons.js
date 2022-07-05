import React, { useState, useEffect } from "react";
import "./Components.css";

const Buttons = ({ offset, setOffset, currentPage }) => {
  const [disableNext, setDisableNext] = useState(true);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/${currentPage}?limit=25&offset=${offset}`)
      .then(res => res.json())
      .then(data => {
        if (data.next === null) {
          setDisableNext(true);
        } else {
          setDisableNext(false);
        }
      });
  }, [offset, currentPage]);

  return (
    <div>
      <div className="button-section">
        {offset === 0 ? (
          <button className="prev-button" disabled>
            <span>Previous</span>
          </button>
        ) : (
          <button
            className="prev-button"
            onClick={() => {
              setOffset(offset - 25);
              window.scrollTo(0, 0);
            }}
          >
            <span>Previous</span>
          </button>
        )}
        {disableNext === true ? (
          <button className="next-button" disabled>
            <span>Next</span>
          </button>
        ) : (
          <button
            className="next-button"
            onClick={() => {
              setOffset(offset + 25);
              window.scrollTo(0, 0);
            }}
          >
            <span>Next</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
