import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import SingleBlog from "../Blogs/SingleBlog/SingleBlog";
import Campaign from "../Campaign/Campaign";
import Dashboard from "../Dashboard/Dashboard";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import NgoSignup from "../NgoSignup/NgoSignup";
import PartnerDetails from "../PartnerDetails/PartnerDetails";
import Partners from "../Partners/Partners";
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
                path:'/campaign',
                element: <Campaign></Campaign>
            },
            {
                path:'/ngosignup',
                element: <NgoSignup></NgoSignup>
            },
            {
                path:'/partners',
                element: <Partners></Partners>
            },
            {
                path:'/partners/:id',
                element: <PartnerDetails></PartnerDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/ngoSignup/${params.id}`)
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
