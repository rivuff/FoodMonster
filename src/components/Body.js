import { RestaurantCard } from "./ResturantCard"
import { restaurantList } from "../constants"
const Body = ()=>{
    return(
        <div className='restaurant-list'>
            {
                restaurantList.map((restaurant) =>{
                    return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
                })
            }
        </div>
    )
   
}

export default Body;