import React from "react";
import { useState } from "react";
import "./home.css";
import "./homemediaQ.css";
import Cards from "../CardsComponents/Cards";
import { useEffect } from "react";

const Home = () => {
  const [allResturentList, setallResturantList] = useState([]);
  useEffect(() => {
    getData()
  }, []);

 async function getData () {
    const getFoodData = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.38704&lng=77.2821787&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await getFoodData.json()
    setallResturantList(jsonData)
    // console.log(jsonData)
  };

  return ( <>
      <div className="home-containor">
        <div className="search-containor">
          <div className="input-box">
            <input type="text" className="search-box" />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="filter-btns-box">
            <button className="search-btns">relevance</button>
            <button className="search-btns">delivery time</button>
            <button className="search-btns">rating</button>
          </div>
        </div>
        <div className="card-containor">
       
          {
            allResturentList?.data?.cards.map((CardsData)=>{
          
              return(<Cards allResturentData = {CardsData } key={CardsData.data.data.id} />)
            })
          }
 </div>
    </div>
    </>
  );
};

export default Home;
