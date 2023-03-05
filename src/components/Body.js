import { RestaurantCard } from "./ResturantCard"
import { restaurantList } from "../constants"
import { useState, useEffect } from "react"
import  App from "./Shimmer";


function filterData(restaurants, searchText) {
    const filteredData = restaurants.filter((restaurant)=>{
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return filteredData;
}


const Body = ()=>{
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);

    useEffect(()=>{
        getResturants();
    }, []);
    
    
    async function getResturants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.519142&lng=88.373719&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();
    
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }


    //Not rendered component (early return)
    if(!allRestaurants) return null;
    
    return (allRestaurants.length==0)? ( <App/> ):(
        <>
        <div className="search-continaer">
            <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}
            />
            <button onClick={()=>{
                const data = filterData(allRestaurants, searchText);
                setFilteredRestaurants(data);

            }}>Search</button>
        </div>

      

        <div className='restaurant-list'>
            {  
                (
                    (filteredRestaurants.length==0)?  <h1>No restaurant found</h1>
                    : (filteredRestaurants.map((restaurant) =>{  
                        return (restaurant==null) ? (<App/>) : (<RestaurantCard {...restaurant.data} key={restaurant.data.id}/>)
                    }))
                        
                )    
                
            }
        </div>
        </>
    )
   
}

export default Body;
