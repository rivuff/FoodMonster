import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Shimmer } from "react-shimmer";
import useRestaurant from "../utils/useRestaurant";


export const ResturantMenu = ()=> {
    const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    const {id} = useParams();

    //const [restaurant, setRestaurant] = useState(null);
    const restaurant  = useRestaurant(id);
   
    return (!restaurant)? <Shimmer/>: (
        <div className="menu">
            <div>
            <h1>resturant Id : {id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} starts</h3>
            <h3>{restaurant?.costForTwo}</h3>
            </div>
            <div>
                <h1>MENU</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>
                    <li key={item.id}> {item.name}</li>
                    )}
                </ul>
            </div>
        </div>
      
    )
}