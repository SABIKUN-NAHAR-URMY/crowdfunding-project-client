import React from 'react';
import naturalImg from '../../images/naturalDisaster.jpg';
import leafImg from '../../images/fulles.png';

const NaturalDisaster = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-5 bg-slate-100'>
                <div className='w-[600px] mx-auto mt-16'>
                    <img className='w-20' src={leafImg} alt="" />
                    <p className='text-2xl mb-3 text-green-700 font-bold'> Change The World.</p>
                    <p className='text-6xl font-bold text-lime-600 mb-5'>Need Your Big Hand For Change The World.</p>
                    <button className='btn border-none bg-green-400 mr-5'>All Causes</button>
                    <button className='btn border-none bg-green-400'>Donate Now</button>
                </div>

                {/* banner section  */}
                <div className='py-10'>
                    <img className='rounded-full w-[600px] h-[600px]' src={naturalImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NaturalDisaster;