import React from "react";
import "./Components.css";

const Buttons = ({ offset = 0, setOffset = () => {}, currentPage }) => {
  let disableNextButton = true;

  fetch(
    `https://pokeapi.co/api/v2/${currentPage}?limit=25&offset=${offset}`
  )
    .then(res => res.json())
    .then(data => {
      if (data.next === null) {
        disableNextButton = true;
      } else {
        disableNextButton = false;
      }
    });

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
        {disableNextButton === true ? (
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
