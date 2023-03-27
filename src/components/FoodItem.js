import { ITEM_IMG_CDN } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const FoodItem = ({
  name,
  description,
  price,

})=>{
  return (
    <>
    <h1>{name}</h1>
    <h2>{description}</h2>
    <h3>{price}</h3>
    </>
  )
}

export default FoodItem