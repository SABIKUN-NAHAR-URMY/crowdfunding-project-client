import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import SingleBlog from "../Blogs/SingleBlog/SingleBlog";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Main from "../Main/Main";


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
                loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path:'/gallery',
                element: <Gallery></Gallery>
            }
        ]
    }
])
