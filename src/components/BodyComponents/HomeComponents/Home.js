import React from "react";
import "./home.css";
import "./home@mediaQ.css";
import Cards from "../CardsComponents/Cards";

const Home = () => {
  return (
    <>
      <div className="home-containor">
        <div className="serach-containor">
          <input type="text" className="search-box" />
          <button className="serach-btn">serach</button>
          <div className="filter-btns-box">
            <button className="serach-btn">relevance</button>
            <button className="serach-btn">delivery time</button>
            <button className="serach-btn">rating</button>
          </div>
        </div>
        <div className="card-containor">
          <Cards></Cards>
        </div>
      </div>
    </>
  );
};

export default Home;
