import React from "react";
import { useState } from "react";
import "./home.css";
import "./homemediaQ.css";
import Cards from "../CardsComponents/Cards";
// import Shimmer from "../ShimmerComponent/Shimmer";
import { useEffect } from "react";

const Home = () => {
  const [allResturentList, setallResturantList] = useState([]);
  const [searchData, setNewSearchData] = useState("")
  // console.log(allResturentList)
  useEffect(() => {
    getData()
  }, []);

 async function getData () {
    const getFoodData = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.38704&lng=77.2821787&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await getFoodData.json()
    setallResturantList(jsonData?.data?.cards )
    // console.log(jsonData)
  }; 
  
  const filterItem = (searchData,allResturentList)=>{
  // const filterItems = allResturentList.filter((restaurants)=> 
  // restaurants.data.name.includes(searchData));
  //  return filterItems ;
  // console.log(allResturentList)
   
  }

  function MaxRating (allResturentList) {
   
    const starts = allResturentList;
    // console.log(starts);

    // const allRatings = starts.map((values)=>values?.data)
  const filterItems = starts.filter((value) => value?.data?.data?.avgRating >=4 )
    // .filter((value) => value.data.data.avgRating >=4 )

    // console.log(starts )
    // console.log(allRatings)
    // console.log(filterItems)
    return filterItems
  }

  function FastDelivery (allResturentList){
    // console.log(allResturentList)
    const data = allResturentList ;
    // console.log(data)
    const wIn30Min = data.filter((maxTime)=> 
    maxTime.data.data.maxDeliveryTime < 30 
    );
    console.log(wIn30Min)
    return wIn30Min ;

  }
  return ( <>
  
      <div className="home-containor">
        <div className="search-containor">
          <div className="input-box">
            <input type="text" className="search-box" value={searchData}
             onChange={ (e) =>  setNewSearchData(e.target.value)
              }/>
            <button className="search-btn" onClick={  // filter function to update the resturant data according for search
            () => {
              const filterData = filterItem(searchData,allResturentList) ;
              setallResturantList(filterData);
            }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="filter-btns-box">
            <button className="search-btns" onClick={()=>{
                      setallResturantList(allResturentList)
            }}>Resturents</button>
            <button className="search-btns" onClick={ ()=>{
              const fastest = FastDelivery(allResturentList ) ;
              setallResturantList(fastest)
         
            }}> delivery time</button>
            <button className="search-btns" onClick={()=>{
              const Ratings = MaxRating(allResturentList) ;
              setallResturantList(Ratings);
              // console.log(Ratings)
            }}>rating</button>
          </div>
        </div>
        <div className="card-containor">  
          {
            allResturentList.map((CardsData)=>{
              {/* console.log('CardsData',CardsData); */}
              return(<Cards allResturentData = {CardsData }  />)
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
