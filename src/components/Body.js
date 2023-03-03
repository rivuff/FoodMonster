import { RestaurantCard } from "./ResturantCard"
import { restaurantList } from "../constants"
import { useState } from "react"

function filterData(restaurants, searchText) {
    const filteredData = restaurants.filter((restaurant)=>{
        return restaurant.data.data.name.includes(searchText);
    });

    return filteredData;
}

const Body = ()=>{
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    return(
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
                const data = filterData(restaurants, searchText);
                setRestaurants(data);

            }}>Search</button>
        </div>


        <div className='restaurant-list'>
            {
                restaurants.map((restaurant) =>{
                    return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
                })
            }
        </div>
        </>
    )
   
}

export default Body;