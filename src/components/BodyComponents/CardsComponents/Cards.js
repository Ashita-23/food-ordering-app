import React from "react";
import "./cards.css";
import "./cards@mediaQ.css";

const Cards = () => {
  return (
    <>
      <div className="card-outer-box">
        <figure className="image-box">
          <image className="image" src="#ndjhj" alt="card-image" />
        </figure>
        <figcaption className="food-name">{"food name"}</figcaption>
        <p className="food-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          totam magni impedit officia nobis esse natus voluptate rem amet!
          Similique hic repellat velit consectetur sit!
        </p>
        <div className="RTP-box">
            <span className="mrp-text">rating |</span>
            <span className="mrp-text">timing |</span>
            <span className="mrp-text">price</span>
        </div>
        <div className="btn-box">
            <p className="offer-text"> 10 % off</p>
            <button className="view-btn">Quick view</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
