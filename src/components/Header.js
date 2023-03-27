import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import SignIn from "./form";
const Title = ()=> (
    // <h2 id='title' key='h2'>Food Monster</h2>
    <a href='/'> 
        <img
        className='h-28'
        alt='logo' 
        src='https://user-images.githubusercontent.com/74763144/222722640-82f61afa-22f0-4967-a9f9-226447a76ff5.png'/>
     </a>
)



const HeaderComponent = ()=>{

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = SignIn();

    const {user}= useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);

    return (
        <div className='flex justify-between bg-green-50 shadow-md p-3 mb-1' >
        <Title/>
        <div className='nav-items'>
            <ul className="flex py-10">
                <li className="px-2"><Link to='/'> Home</Link></li>
                <li className="px-2"><Link to='/about'> About</Link></li>
                <li className="px-2"><Link to='/contactUs'> contactUs</Link></li>
                <li className="px-2"><Link to='/instamart'>Instamart</Link></li>
                <li className="px-2"><Link to='/cart'>cart - {cartItems.length}</Link></li>
            </ul>
        </div>
        <span className="font-bold p-10 text-red-600"> {user.name}</span>
        {isAuthenticated? <button className="py-5" onClick={()=>setIsAuthenticated(false)}>Log In</button> : <button onClick={()=>setIsAuthenticated(true)}>log Out</button>}
        
        
        </div>
    );
};

export default HeaderComponent