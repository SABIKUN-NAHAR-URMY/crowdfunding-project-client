import React, { useEffect, useState } from 'react';
import img1 from '../../images/img1.jpg';
import BlogsCard from './BlogsCard';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaEnvelopeOpenText, FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa";
import './Blogs.css';

const Blogs = () => {
    const [blogsCard, setBlogsCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogsCard(data))
    }, [])

    return (
        <div>
            {/* banner section for blogs */}
            <section>
                {/* <div className='relative'>
                        <img className='w-full h-96 object-cover absolute' src={img1} alt="" />
                        <h1 className='absolute text-7xl font-bold text-white left-[600px] top-40'>Blogs</h1>
                    </div> */}

                <div className='blogsBannerImg'>
                    <h1 className='text-4xl font-bold'>Blogs</h1>
                </div>
            </section>

            {/* card section  */}
            <section className='mt-28'>
                <div className='lg:grid grid-cols-3 gap-5 mx-8 lg:mx-36' data-aos="fade-up" data-aos-duration="3000">
                    {
                        blogsCard.map(blogCard => <BlogsCard
                            key={blogCard.id}
                            blogCard={blogCard}></BlogsCard>)
                    }
                </div>
            </section>

            {/* one extra section  */}
            <section className='mt-14'>
                <div className='bg-green-500 p-9'>
                    <div className='lg:grid grid-cols-2'>
                        <div className='flex'>
                            <FaFacebookSquare className='w-10 h-10 text-white'></FaFacebookSquare>
                            <FaTwitterSquare className='w-10 h-10 text-white'></FaTwitterSquare>
                            <FaLinkedin className='w-10 h-10 text-white'></FaLinkedin>
                            <FaInstagramSquare className='w-10 h-10 text-white'></FaInstagramSquare>

                        </div>

                        <div className='mt-7 lg:mt-0 lg:grid grid-cols-3 gap-5 text-white'>
                            <div className='flex items-center'><FaEnvelopeOpenText className='w-10 h-10 mr-3'></FaEnvelopeOpenText> <span>needhelp@gmail.com <br />
                                Email address</span></div>
                            <div className='flex items-center'><FaPhoneVolume className='w-10 h-10 mr-3'></FaPhoneVolume> <span>+880 1534789342 <br />
                                Phone line</span></div>
                            <div className='flex items-center'><FaMapMarkerAlt className='w-10 h-10 mr-3'></FaMapMarkerAlt> <span>66 Banani Street Dhaka <br />
                                Visit us</span></div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;