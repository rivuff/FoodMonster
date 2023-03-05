import React from 'react';
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header';
import Body from './components/Body';

const AppLayout = ()=>{
    return (
        <>
        <HeaderComponent/>
        <Body/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

  /**
         
        Header
            - logo
            - List of items(right side)
            - cart
        
        Body
            - search bar
            - restaurant list
            - restaurant card
                - Image 
                - Name
                - rating
                - cuisins
                - Price
        
        Footer
            - links
            - copyright
         */
