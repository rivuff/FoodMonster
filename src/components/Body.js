import { RestaurantCard } from "./ResturantCard"
import { restaurantList } from "../constants"
import { useState, useEffect } from "react"
import  Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = ()=>{
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);

    useEffect(()=>{
        getResturants();
    }, []);

    const online= useOnline();

    if(online==false){
        return <h1>Seems you are offline, check your wifi connection</h1>
    }

    async function getResturants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.519142&lng=88.373719&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();
    
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }


    //Not rendered component (early return)
    if(!allRestaurants) return null;
    
    return (allRestaurants.length==0)? ( <Shimmer/> ):(
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
                        return (<>
                            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                            </Link> 
                            </>  
                        )  
                    }))
                        
                )    

            }
        </div>
        </>
    )
   
}

export default Body;
