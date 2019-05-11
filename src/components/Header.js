import React from "react";
import Basket from "./Basket.js";
import Menu from "./Menu.js";
import TopButton from "./TopButton.js";
import StarRatings from "react-star-ratings";

const Header = props => {
  return (
    <header>
      <div>
        <div className="top-band">
          <div className="container">
            <img
              className="logo-header"
              src="https://consumer-component-library.roocdn.com/11.3.1/static/images/logo-teal.64a39561252047a022e5ce0929c75374.svg"
              alt="logo"
            />
            <div>
              <TopButton
                counters={props.counters}
                handleTotal={props.handleTotal}
              />
            </div>
          </div>
        </div>
        <div className="top-description">
          {" "}
          <div className="container">
            <div className="title-text">
              <h1> {props.restosData && props.restosData.restaurant.name}</h1>{" "}
              <div className="description">
                {props.restosData &&
                  props.restosData.restaurant.categories.join(" • ") +
                    " • " +
                    props.restosData.restaurant.address}
              </div>
              <div className="description">
                {props.restosData && props.restosData.restaurant.description}
              </div>
              <div className="rate-line">
                {" "}
                <StarRatings
                  currentRating={
                    props.restosData && props.restosData.restaurant.percentage
                  }
                  starRatedColor="#6BAC26"
                  numberOfStars={5}
                  name="rating"
                  starDimension="18px"
                  starSpacing="1px"
                />{" "}
                <div className="rate">
                  {" "}
                  {props.restosData &&
                    (props.restosData.restaurant.percentage / 20).toFixed(1)}
                </div>
                <div className="description">
                  ({props.restosData && props.restosData.restaurant.ratings}{" "}
                  ratings){" "}
                </div>{" "}
              </div>
            </div>
            <div>
              <div className="title-pic">
                <img
                  src={props.restosData && props.restosData.restaurant.picture}
                  alt="main one"
                />{" "}
              </div>{" "}
              <div className="deliver">
                <div>
                  <div className="description">Deliver to</div>
                  <div style={{ color: "red", fontSize: "14px" }}>
                    No location selected
                  </div>
                </div>
                <div>
                  <div className="description">Deliver in</div>
                  <div
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "14px"
                    }}
                  >
                    {props.restosData && props.restosData.restaurant.delay}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-nav">
        <div className="container">
          {" "}
          <div className="menu">
            <Menu restosData={props.restosData} />
          </div>
          <Basket
            handleCreateCounter={props.handleCreateCounter}
            handleIncrement={props.handleIncrement}
            handleDecrement={props.handleDecrement}
            handleTotal={props.handleTotal}
            counters={props.counters}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
