import React from "react";
const DeckNavigator = ({onBackClick, onNextClick}) => {
  return (
    <div className="navigator">
      <button type="button" className="btn btn-secondary" onClick={onBackClick}>
        Back
      </button>
      <button type="button" className="btn btn-secondary" onClick={onNextClick}>
        Next
      </button>
      <style jsx>{`
        .navigator {
          position: fixed;
          display: flex;
          justify-content: center;
          width: 100%;
          bottom: 0;
          z-index: 10;
          height: 100p;
          height: 100px;
          padding: 10px;
          align-items: center;
        }
        .navigator > button {
          width: 100px;
          height: 48px;
        }
        .navigator > button:nth-child(n + 1) {
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default DeckNavigator;
