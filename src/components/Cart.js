import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
const Cart = ()=>{

    const cartItems = useSelector((store)=>(store.cart.items));

    return(
        <div>
            {console.log({...cartItems})}
            <h1>This is the cart page</h1>
            <h2>{cartItems.length}</h2>
            {
                cartItems.map((item)=>(
                    <FoodItem {...item.card.info} />
                ))
            }
            
        </div>
    )
}

export default Cart;