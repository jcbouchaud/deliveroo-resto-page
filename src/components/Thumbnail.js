import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Thumbnail = props => {
  return (
    <div className="all">
      {props.counters.map(y => (
        <div
          key={y.id}
          className="thumbnail"
          onClick={() => props.handleCreateCounter(y.id, y.title, y.price)}
        >
          <div className={y.picture ? "text" : "none"}>
            <div className="title">{y.title}</div>
            <LinesEllipsis
              className="description"
              text={y.description ? y.description : ""}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
            <div className="price">
              €{y.price}
              <span className="popular">
                {y.popular ? (
                  <span>
                    <i className="fas fa-star" />
                    <span>Popular</span>
                  </span>
                ) : null}
              </span>
            </div>
          </div>
          <div className="pic-block">
            {y.picture ? <img src={y.picture} alt="meals" /> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
