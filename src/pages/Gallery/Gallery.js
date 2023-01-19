import React from 'react';
import img1 from '../../images/img22.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import img9 from '../../images/img9.jpg';
import img10 from '../../images/flooding.jpg';
import img11 from '../../images/img11.jpg';
import img12 from '../../images/img12.jpg';
import img13 from '../../images/img13.jpg';
import img14 from '../../images/img14.jpg';
import img15 from '../../images/img15.jpg';
import img16 from '../../images/img16.jpg';
import img17 from '../../images/img17.jpg';
import img18 from '../../images/img18.jpg';
import img19 from '../../images/img19.jpg';
import img20 from '../../images/img20.jpg';
import img21 from '../../images/img21.jpg';
import heartImg from '../../images/heart01.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <div className='bannerImg'>
                {/* <img className='w-full h-96 object-cover' src={bannerImg} alt="" /> */}
                <h1 className='text-4xl font-bold'>Gallery</h1>
            </div>

            {/* <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img className='rounded-lg' src={image} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider> */}


            <div className='mt-28 mx-9 lg:mx-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' data-aos="fade-up" data-aos-duration="3000">
                    <PhotoProvider>
                        <PhotoView src={img1}>
                            <img className='w-full h-64 object-cover' src={img1} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img2}>
                            <img className='w-full h-64 object-cover' src={img2} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img3}>
                            <img className='w-full h-64 object-cover' src={img3} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img4}>
                            <img className='w-full h-64 object-cover' src={img4} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img5}>
                            <img className='w-full h-64 object-cover' src={img5} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img6}>
                            <img className='w-full h-64 object-cover' src={img6} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img7}>
                            <img className='w-full h-64 object-cover' src={img7} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img8}>
                            <img className='w-full h-64 object-cover' src={img8} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img9}>
                            <img className='w-full h-64 object-cover' src={img9} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img10}>
                            <img className='w-full h-64 object-cover' src={img10} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img11}>
                            <img className='w-full h-64 object-cover' src={img11} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img12}>
                            <img className='w-full h-64 object-cover' src={img12} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img13}>
                            <img className='w-full h-64 object-cover' src={img13} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img14}>
                            <img className='w-full h-64 object-cover' src={img14} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img15}>
                            <img className='w-full h-64 object-cover' src={img15} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img16}>
                            <img className='w-full h-64 object-cover' src={img16} 
                             style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                             </PhotoView>
                             <PhotoView src={img17}>
                            <img className='w-full h-64 object-cover' src={img17} 
                            style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img18}>
                            <img className='w-full h-64 object-cover' src={img18} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img19}>
                            <img className='w-full h-64 object-cover' src={img19} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img20}>
                            <img className='w-full h-64 object-cover' src={img20} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                            <PhotoView src={img21}>
                            <img className='w-full h-64 object-cover' src={img21} style={{ cursor: 'pointer', objectFit: 'cover' }} alt="" />
                            </PhotoView>
                        
                    </PhotoProvider>
                </div>

            </div>

            <div className='mt-28 mb-10 galleryBgImg'>
                <img className='mx-auto' data-aos="fade-up" src={heartImg} alt="" />
                <h1 className='text-xl lg:text-5xl font-bold' data-aos="fade-up">We will try to help approximately 1000000 people. <br /> You can also join with us.</h1>

                <button className='btn mt-8 bg-gradient-to-r from-green-600 to-teal-600 hover:scale-110' data-aos="fade-up">Donate Now</button>
            </div>

        </div>
    );
};

export default Gallery;