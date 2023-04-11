import React from "react";
import "./cards.css";
import "./cards@mediaQ.css";

const Cards = (props) => {
  // console.log(props)
  return (

    <>
      <div className="card-outer-box" key={props?.allResturentData?.data?.data.restaurantId}>
        <figure className="image-box">
          <img className="image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props?.allResturentData?.data?.data.cloudinaryImageId
} alt="cards" />
        </figure>
        <figcaption className="shop-name">{props?.allResturentData?.data?.data.name}</figcaption>
        <p className="cuisines-box">{props?.allResturentData?.data?.data.cuisines.join(",")}</p>
        <p className="food-text">
         
        </p>
        <div className="RTP-box">
            <span className="mrp-text">{props?.allResturentData?.data?.data.totalRatings
}|</span>
            <span className="mrp-text">{props?.allResturentData?.data?.data.maxDeliveryTime}MINS|</span>
            <span className="mrp-text"> Rs.{props?.allResturentData?.data?.data.costForTwo/100} FOR TWO</span>
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
