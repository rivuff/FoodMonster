import React, { useEffect } from "react";
import Profile from "./ProfileClass";
import { Outlet } from "react-router-dom";
// const About = ()=>{
//     return (
//         <div>
//             <h1>About us Page</h1>
//             <h3>This is the food monster About us page which we will make beautiful soon</h3>
//             <Profile name={"Rivu Naskar"} xyz={"ABC"}/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("This is a constructor");
    }

    componentDidMount(){
        console.log("Parent - Component did mount");
    }

    render(){

        console.log("Parent-render");
        return (
                <div>
                     <h1>About us Page</h1>
                     <h3>This is the food monster About us page which we will make beautiful soon</h3>
                     <Profile name={"Rivu Naskar"} xyz={"ABC"}/>
                 </div>
            )
    }

}

export default About