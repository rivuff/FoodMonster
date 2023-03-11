import { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./form";
const Title = ()=> (
    // <h2 id='title' key='h2'>Food Monster</h2>
    <a href='/'> 
        <img
        className='logo'
        alt='logo' 
        src='https://user-images.githubusercontent.com/74763144/222722640-82f61afa-22f0-4967-a9f9-226447a76ff5.png'/>
     </a>
)


const HeaderComponent = ()=>{

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = SignIn();
    console.log(login);
    return (
        <div className='header'>
        <Title/>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'> Home</Link></li>
                <li><Link to='/about'> About</Link></li>
                <li><Link to='/contactUs'> contactUs</Link></li>
            </ul>
        </div>
        
        {isAuthenticated? <button onClick={()=>setIsAuthenticated(false)}>Log In</button> : <button onClick={()=>setIsAuthenticated(true)}>log Out</button>}
        
        
        </div>
    );
};

export default HeaderComponent