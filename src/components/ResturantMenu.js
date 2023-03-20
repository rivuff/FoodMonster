// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Shimmer } from "react-shimmer";
import useRestaurant from "../utils/useRestaurant";


export const ResturantMenu = ()=> {
    const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    const {id} = useParams();

    //const [restaurant, setRestaurant] = useState(null);
    const restaurant  = useRestaurant(id);
    console.log(restaurant);
   
    return (!restaurant)?<>{Shimmer}</>: (
        <div  className="grid justify-center">
            <div className=" bg-slate-50 p-2 m-2">
                <div className="text-2xl font-bold">{restaurant?.name}</div>
                    <div className="pb-4">
                        <div className="flex flex-row justify-between">
                            <ul className="flex flex-col w-100">
                                <li className="font-light text-sm">{restaurant?.area}</li>
                                <li className="font-light text-sm mb-2">{restaurant?.cuisines?.join(", ")}</li>
                                <li className="font-bold text-sm">{restaurant?.costForTwoMsg}</li>
                            </ul>
                            <ul className="flex">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-black">{restaurant?.avgRating}</p>
                            </ul>
                        </div>                        
                    </div>               
                </div>                    
              <div>

              <h1 className="mb-2 text-base font-bold">Breakfast & All Day Meals {restaurant?.menu?.items?.length}</h1>

                {
                    Object.values(restaurant?.menu?.items).map((item)=>
                    <> 
                        <div className="max-w-sm w-full lg:max-w-full lg:flex m-4 divide-y-2">
                        <img className="h-36 lg:w-48 overflow-hidden rounded-md" key={item.cloudinaryImageId} src={item.cloudinaryImageId?.length==0?'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800': IMG_CDN_URL+ item?.cloudinaryImageId}></img>

                        <div className="text-sm p-2 pl-4">
                            <p className="mb-2 text-base font-bold text-gray-700">{item.name}</p>
                            <p className="text-xs text-gray-500 overflow-hidden mb-1"> ₹{item.price/100}</p>
                            <p className="w-80 h-20 text-xs text-gray-500 overflow-hidden">{item.description}</p>
                        </div>

                        </div>
                    </>)}
              </div>
        </div>
      
    )
}