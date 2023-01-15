import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCalculator, FaAngleRight, FaFacebook, FaTwitter, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import img2 from '../../../images/working.jpg';
import '../Blogs.css';

const SingleBlog = () => {
    const singleBlog = useLoaderData();
    console.log(singleBlog);
    return (
        <div className='mb-10'>
            {/* banner section for blogs */}
            <section>
                {/* <div className='relative'>
                        <img className='w-full h-96 object-cover absolute' src={img1} alt="" />
                        <h1 className='absolute text-7xl font-bold text-white left-[600px] top-40'>Blogs Details</h1>
                    </div> */}

                <div className='blogsBannerImg'>
                    <h1 className='text-4xl font-bold'>Blog Details</h1>
                </div>
            </section>

            <section className='mt-28'>
                <div className='lg:grid grid-cols-3 mx-4 lg:mx-36 gap-6'>
                    <div className='col-span-2' data-aos="fade-up" data-aos-duration="3000">
                        <img className='w-full' src={singleBlog.image} alt="" />
                        <p className='my-5 text-3xl font-bold' data-aos="fade-up">{singleBlog.title}</p>
                        <p className='flex items-center text-slate-500' data-aos="fade-up"><FaCalculator className='mr-2'></FaCalculator>{singleBlog.date}</p>
                        <p className='my-5 text-lg text-gray-600' data-aos="fade-up">{singleBlog.details}</p>
                        <div className='mt-7'>
                            <h1 className='text-3xl font-bold my-6' data-aos="fade-up">{singleBlog.ourWorksTitle}</h1>

                            <p className='border rounded-lg p-9 text-lg text-white bg-green-600' data-aos="fade-up">{singleBlog.ourWorks}</p>
                        </div>
                    </div>



                    <div className='mt-8 lg:mt-0'>
                        {/* profile section  */}
                        <div className="card lg:w-96 bg-green-100 shadow-xl" data-aos="fade-up" data-aos-duration="3000">
                            <div className="avatar mt-10">
                                <div className="w-24 mx-auto rounded-full">
                                    <img src={singleBlog.authorImg} alt='' />
                                </div>
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="text-4xl font-semibold">{singleBlog.author}</h2>
                                <p className='text-base flex items-center mt-3'><img className='w-8 rounded-full mr-3' src={img2} alt="" /> Works with aidHumans</p>
                            </div>
                        </div>

                        {/* categories section  */}

                        <div className="card lg:w-96 bg-green-100 shadow-xl mt-8" data-aos="fade-up" data-aos-duration="3000">
                            <div className="card-body items-center">
                                <h2 className="text-3xl font-semibold text-center">Categories</h2>
                                <ul>
                                    <Link to='/blogs'><li className='flex items-center text-lg'><FaAngleRight className='mr-2'></FaAngleRight> Children</li></Link>
                                    <Link to='/blogs'><li className='flex items-center text-lg'><FaAngleRight className='mr-2'></FaAngleRight> Poor People</li></Link>
                                    <Link to='/blogs'><li className='flex items-center text-lg'><FaAngleRight className='mr-2'></FaAngleRight> Education</li></Link>
                                    <Link to='/blogs'><li className='flex items-center text-lg'><FaAngleRight className='mr-2'></FaAngleRight> Natural Diaster</li></Link>
                                </ul>
                            </div>
                        </div>

                        {/* social section  */}
                        <div className="card lg:w-96 bg-green-100 shadow-xl mt-8" data-aos="fade-up" data-aos-duration="3000">
                            <div className="card-body items-center">
                                <h2 className="text-3xl font-semibold text-center">Social Share</h2>
                                <div className='flex justify-evenly mt-6'>
                                    <Link to='/' className='mr-3'><FaFacebook className='w-8 h-8'></FaFacebook></Link>
                                    <Link to='/' className='mr-3'><FaTwitter className='w-8 h-8'></FaTwitter></Link>
                                    <Link to='/' className='mr-3'><FaLinkedin className='w-8 h-8'></FaLinkedin></Link>
                                    <Link to='/' className='mr-3'><FaWhatsappSquare className='w-8 h-8'></FaWhatsappSquare></Link>
                                </div>
                            </div>
                        </div>

                        {/* Comment section  */}
                        <div className="card lg:w-96 bg-green-100 shadow-xl mt-8" data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-3xl font-bold p-3'>Leave A Message</p>

                            <form className='m-5 '>
                                <textarea name='comment' className="textarea textarea-bordered w-full mb-8" placeholder="Write Comment"></textarea>
                                <input type="text" name='name' placeholder='Name' className="input input-bordered w-full mb-8" />

                                <p className='text-sm font-thin p-3'>Your email address will not be published.</p>
                                <input type="text" name='email' placeholder='Email' className="input input-bordered w-full mb-8" />

                                <input className='btn btn-active btn-ghost w-full' type="submit" value="Post Comment" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleBlog;