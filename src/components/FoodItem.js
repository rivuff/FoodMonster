import { ITEM_IMG_CDN } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const FoodItem = ({
  name,
	imageId,
	avgRating,
	costForTwo,
})=>{
  return (
    <div className=" w-72 m-2 p-2 hover:scale-110 delay-400 transition-all">
    <img src={URL + imageId} className="foodImage" />

    <div className="py-2">
      <p className="font-semibold">{name}</p>
      {/* <p className="font-thin text-xs">{cuisines.join(", ")}</p> */}
    </div>

    <div className="flex items-center justify-center">
      <div
        className=" bg-emerald-300 flex   items-center justify-center text-white py-1 px-1 font-bold text-xs"
        style={{ backgroundColor: "#48c479" }}
      >
        <FaStar color="white" />
        <span className="ml-2">{avgRating}</span>
      </div>
      <p className="ml-2 mr-2">-</p>

      <p className="ml-2 mr-2 ">-</p>
      <p className="font-thin text-xs">{costForTwo}</p>
    </div>

    <div
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#bdc3c7",
        marginTop: 16,
      }}
    ></div>
    <div className="addCtaContainer"></div>
  </div>
  )
}

export default FoodItem