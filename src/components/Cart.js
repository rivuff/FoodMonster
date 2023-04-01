import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{

    const cartItems = useSelector((store)=>(store.cart.items));
    const dispatch = useDispatch();


    let sum = 0;
    if(cartItems?.length>0){
        cartItems?.forEach(element => {
            sum += element?.qty*(element.card.info.price/100);
        });
    }
    

    const removeAll = item =>{
        console.log(item);
        dispatch(clearCart(item))
    }

    return(
            <div className=" max-w-sm m-8 rounded overflow-hidden shadow-lg">

                <div  className="justify-between flex">
                    <p className="p-4 justify-center w-40 font-bold">Items</p>   
                    <button type="button" className="focus:outline-none text-white bg-red-700 text- hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-xs px-2 mr-1 mb-2.5 mt-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>removeAll()}>clear cart</button>
                </div>
                 
                <div>
                {
                   cartItems.length>0 ?cartItems?.map((item)=>(
                    <>
                        <div className="justify-between flex">
                            <p className="p-6 justify-center w-40">{item.card.info.name}</p>
                            <p className="p-6 justify-center w-20">{item.qty}</p>
                            <p className="p-6 justify-center w-20">{item.card.info.price/100}</p>
                        </div>
                    </>
                    )): <></>
                }
                </div>  

                <hr className="my-4 border-1 border-black dark:bg-black"/>

                <div>
                <div  className="justify-between flex">
                    <p className="p-4 justify-center w-40 font-bold">To Pay</p>   
                    <p className="p-4  justify-center w-20 font-bold">₹ {sum}</p>
                </div>
                </div>
                        
            
            </div>
     
       
    )
}

export default Cart;