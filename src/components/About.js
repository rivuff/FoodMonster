import React, { useEffect, useState } from "react";
import Profile from "./ProfileClass";
import { Outlet } from "react-router-dom";

const Section = ({title, description, isVisible, setIsVisible})=>{
    return (
        <div className="border border-black p-2 m-2">
            <h1 className="font-bold text-xl">{title}</h1>
            {
                isVisible? (
                    <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">hide</button>
                ):
                (
                    <button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>
                )
            }
            {isVisible && <p>{description}</p>}
            
        </div>
    )
}

const About = ()=>{

    const [visibleSection, setVisibleSection] = useState("about")
    const [notVisible, setNotvisible] = useState(false);
    return (<>
        <Section
        title={"This is about section of FoodMonster"}
        description={"lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "}

        isVisible =  {visibleSection=="about" && notVisible==true}

        setIsVisible = {notVisible? ()=>{
            setVisibleSection("about")
            setNotvisible(false)
        }:  ()=>{
            setVisibleSection("about")
            setNotvisible(true)}
        }
        />

        <Section 
        title={"This is Team section of FoodMonster"}
        description={"lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        
        isVisible =  {visibleSection=="team" && notVisible==true}
        setIsVisible = {notVisible? ()=>{
            setVisibleSection("team")
            setNotvisible(false)
        }:  ()=>{
            setVisibleSection("team")
            setNotvisible(true)}
        }
        />

        <Section 
        title={"This is Career section of FoodMonster"}
        description={"lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        
        isVisible =  {visibleSection=="career" && notVisible==true}

        setIsVisible = {notVisible? ()=>{
            setVisibleSection("career")
            setNotvisible(false)
        }:  ()=>{
            setVisibleSection("career")
            setNotvisible(true)}
        }
        />

    </>
    )

}


// class About extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("This is a constructor");
//     }

//     componentDidMount(){
//         console.log("Parent - Component did mount");
//     }

//     render(){

//         console.log("Parent-render");
//         return (
//                 <div>
//                      <h1>About us Page</h1>
//                      <h3>This is the food monster About us page which we will make beautiful soon</h3>
//                      <Profile name={"Rivu Naskar"} xyz={"ABC"}/>
//                  </div>
//             )
//     }

// }

export default About