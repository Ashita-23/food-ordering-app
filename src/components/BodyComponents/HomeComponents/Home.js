import React from "react";
import { useState } from "react";
import "./home.css";
import "./homemediaQ.css";
import Cards from "../CardsComponents/Cards";
// import Shimmer from "../ShimmerComponent/Shimmer";
import { useEffect } from "react";

const Home = () => {
  const [allResturentList, setallResturantList] = useState([]);
  const [searchData, setSearchRestData] = useState("")
  // console.log(searchData)
  useEffect(() => {
    getData()
  }, []);

 async function getData () {
    const getFoodData = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.38704&lng=77.2821787&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await getFoodData.json()
    setallResturantList(jsonData)
    console.log(jsonData)
  };
  
  return ( <>
 
      <div className="home-containor">
        <div className="search-containor">
          <div className="input-box">
            <input type="text" className="search-box" value={searchData}
             onChange={ (e) => setSearchRestData(e.target.value)
              }/>
            <button className="search-btn" onClick={  ()=>{} }>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="filter-btns-box">
            <button className="search-btns" onClick={()=>setallResturantList(getData)}>relevance</button>
            <button className="search-btns"  >delivery time</button>
            <button className="search-btns" onClick={()=>{}}>rating</button>
          </div>
        </div>
        <div className="card-containor">

        
       
          {
            allResturentList?.data?.cards.map((CardsData)=>{
          
              return(<Cards allResturentData = {CardsData } key={CardsData.data.data.id} />)
            })
          }

          {/* {
            allResturentList?.data?.cards.map((event)=>{
              return(<>
                <Shimmer ></Shimmer>
              </>)
            })
          } */}
 </div>
    </div>
    </>
  );
};

export default Home;
