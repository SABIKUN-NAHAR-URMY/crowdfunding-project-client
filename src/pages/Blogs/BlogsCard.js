import React from 'react';
import { Link } from 'react-router-dom';
import donate from '../../images/donate.png';
import { FaAngleDoubleRight } from "react-icons/fa";

const BlogsCard = ({ blogCard }) => {
    console.log(blogCard);
    const { _id, image, title, details, date } = blogCard;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl mb-10" data-aos="fade-up" data-aos-duration="3000">
            <figure className='relative'>
                <img className='w-full h-64' src={image} alt="Shoes" />
                <div className='-bottom-4 left-5 absolute'>
                    <img className='w-10 border rounded-full' src={donate} alt="" />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold" data-aos="fade-up">{title}</h2>
                <p className='text-lg' data-aos="fade-up">{
                    details.length > 100 ? details.slice(0, 100) + '...' : details
                } </p>
                <Link to={`/details/${_id}`}>
                    <h1 className='text-green-600 text-lg font-bold py-5 flex items-center' data-aos="fade-up" >Read More <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight></h1>
                </Link>
            </div>
            <p className='text-xs text-center font-thin border-t py-3' data-aos="fade-up">{date}</p>
        </div>
    );
};

export default BlogsCard;