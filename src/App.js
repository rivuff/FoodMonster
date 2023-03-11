import React from 'react';
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import { ResturantMenu } from './components/ResturantMenu';
import SignIn from './components/form';
import Profile from './components/ProfileClass';


const AppLayout = ()=>{
    return (
        <>
        <HeaderComponent/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                     }
                ]
            },
            {
                path: "/contactUs",
                element: <ContactUs/>
            },{
                path: "/restaurant/:id",
                element: <ResturantMenu/>
            },
            {
                path: "/login",
                element:<SignIn/>
            }
        ]
    }
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)