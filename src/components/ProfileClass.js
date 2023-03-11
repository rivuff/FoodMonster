import React from "react"
import { useEffect } from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);

        console.log("Child-constructor");
    }

    
    componentDidMount(){
        console.log("child-componentDidMount");
    }
    render(){
        console.log("child - render");
        return <div>
            <h1>This is a the Profile</h1>
            <h2>{this.props.name}</h2>
            <h3>{this.props.xyz}</h3>
        </div> 

    }
}

export default Profile;