import React from "react";
import Thumbnail from "./Thumbnail.js";

const Content = props => {
  // console.log(props.restosData);
  return (
    <ul>
      {props.restosData &&
        Object.entries(props.restosData.menu).map((x, index) => (
          <li className="category" key={index} id={x[0]}>
            <h1>{x[1].length > 0 ? x[0] : null}</h1>
            <div>
              <Thumbnail
                counters={x[1]}
                handleCreateCounter={props.handleCreateCounter}
                handleIncrement={props.handleIncrement}
              />
            </div>
          </li>
        ))}{" "}
    </ul>
  );
};

export default Content;
