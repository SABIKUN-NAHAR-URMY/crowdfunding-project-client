import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import SingleBlog from "../Blogs/SingleBlog/SingleBlog";
import Dashboard from "../Dashboard/Dashboard";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import SignUp from "../SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/details/:id',
                element: <SingleBlog></SingleBlog>,
                loader: ({params}) => fetch(`https://code-kids-project-server.vercel.app/blogs/${params.id}`)
            },
            {
                path:'/gallery',
                element: <Gallery></Gallery>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])
