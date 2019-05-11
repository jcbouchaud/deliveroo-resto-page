import React from "react";
const TopButton = props => {
  return (
    <button>
      <div>
        <i className="fas fa-shopping-basket" />{" "}
        <span>
          {props.counters.length > 0
            ? "€" + (props.handleTotal() + 2.5).toFixed(2)
            : (0).toFixed(2)}
        </span>
      </div>
    </button>
  );
};

export default TopButton;
