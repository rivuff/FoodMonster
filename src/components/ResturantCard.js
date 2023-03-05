export const RestaurantCard =({name, cuisines, cloudinaryImageId, avgRating})=> {
    return (

        <div className='card'>
            

            <img className='img' alt='food' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId}></img>
            <h2>{name}</h2>
           
            <h3>{cuisines.join(", ")} </h3>
            <h4>{avgRating} stars </h4>

        </div>
    )
}

