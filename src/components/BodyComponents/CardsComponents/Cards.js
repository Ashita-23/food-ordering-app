import React from "react";
import "./cards.css";
import "./cards@mediaQ.css";

const Cards = (props) => {
  
const restdata = props?.allResturentData?.data?.data;
  return (

    <>
      <div className="card-outer-box" key={ restdata?.restaurantId}>
        <figure className="image-box">
          <img className="image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ restdata?.cloudinaryImageId
} alt="cards" />
        </figure>
        <div className="data-containor">
        <figcaption className="shop-name">{restdata?.name}</figcaption>
        <p className="cuisines-box">{restdata?.cuisines.join(",").trim()}</p>
        <p className="food-text">
         
        </p>
        <div className="RTP-box">
            <span className="ratingHigh-text"><i className="fa-solid fa-star"></i> {restdata?.avgRating}</span><span>|</span>
            <span className="mrp-text">{restdata?.maxDeliveryTime} MINS </span><span>|</span>
            <span className="mrp-text"> Rs.{restdata?.costForTwo/100} FOR TWO</span>
        </div>
        <div className="btn-box">
            <p className="offer-text">{restdata?.aggregatedDiscountInfo?.shortDescriptionList[0].meta || 'Offer Not found'}</p>
            <button className="view-btn">Quick view</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
