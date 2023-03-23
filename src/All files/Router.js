import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import FacebookLoginPage from "./Components/FacebookLoginPage";
import Login from "./Components/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Login></Login>
            },
            {
                path:'/facebooklogin',
              element:<FacebookLoginPage></FacebookLoginPage>
            },
            
        ]
        
    }
])