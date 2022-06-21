import React from "react";
import "./Components.css";

const Buttons = ({ offset = 0, setOffset = () => {} }) => {
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
        <button
          className="next-button"
          onClick={() => {
            setOffset(offset + 25);
            window.scrollTo(0, 0);
          }}
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
