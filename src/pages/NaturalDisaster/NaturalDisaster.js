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
                    <div className="avatar relative">
                        <div className="w-[600px] rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
                            <img src={naturalImg} alt="" />
                            <p className='absolute bottom-0 border w-72 h-72 rounded-full bg-green-400'>Natural Disaster In Our Bangladesh</p>
                        </div>
                    </div>
                    {/* <div className=''>
                        <img className='rounded-full w-[700px] h-[600px]' src={naturalImg} alt="" />
                        <p className='absolute bottom-0 border w-72 h-72 rounded-full bg-green-400'>Natural Disaster In Our Bangladesh</p>
                    </div> */}
                </div>
            </div>

            {/* events */}
            <div className='grid grid-cols-2 gap-0 mx-24 my-8 rounded-2xl bg-green-100'>
                <div className='mt-60 text-xl font-semibold '>
                    <p className='px-10'>In the event of a natural disaster in Bangladesh, <span className='text-green-900 text-2xl font-extrabold'>AidHumans</span> organizations work to provide relief and support to affected communities. Some of the ways these organizations assist in disaster situations include. Overall, the role of volunteer organizations in Bangladesh during natural disasters is to provide support and assistance to affected communities and to help them recover from the impact of these events.
                    </p>
                    <p className='text-2xl font-thin px-10 pb-7'>If you details know that about Events and Causes please click the button!!</p>
                    <div className='mx-64 flex'>
                    <button className='btn bg-lime-900 mr-6'>Events</button>
                    <button className='btn bg-lime-900'>Causes</button>
                    </div>
                </div>
                <div className='py-6 pr-6'>
                <div class="flex">
                    <div class="text-center p-5 bg-gray-300 rounded-full w-28 h-16">1</div>
                    <div class="ml-5">
                        <p class="text-lg text-gray-600">Emergency response: These organizations provide immediate support to communities affected by natural disasters, such as distributing food, water, and shelter materials. They also set up medical camps to provide medical care to those injured or affected by the disaster.</p>
                    </div>
                </div>

                <div class="mt-10 flex">
                    <div class="text-center p-5 bg-gray-300 rounded-full w-24 h-16">2</div>
                    <div class="ml-5">
                        <p class="text-lg text-gray-600">Search and rescue operations: In the aftermath of a disaster, volunteer organizations work with local authorities to search for survivors and help to rescue those who are trapped or in danger.</p>
                    </div>
                </div>

                <div class="mt-10 flex">
                    <div class="text-center p-5 bg-gray-300 rounded-full w-32 h-16">3</div>
                    <div class="ml-5">
                        <p class="text-lg text-gray-600">Rehabilitation and reconstruction: Once the immediate response phase is over, volunteer organizations focus on helping communities recover from the disaster. This may involve rebuilding homes, restoring essential services such as water and electricity, and providing livelihood support to help people get back on their feet.</p>
                    </div>
                </div>
                <div class="mt-10 flex">
                    <div class="text-center p-5 bg-gray-300 rounded-full w-32 h-16">4</div>
                    <div class="ml-5">
                        <p class="text-lg text-gray-600">Awareness raising and risk reduction: In addition to responding to disasters, many volunteer organizations in Bangladesh work to raise awareness about the risks of natural disasters and how communities can prepare for and reduce the impact of these events. This may include carrying out risk assessments, developing early warning systems, and training communities in disaster preparedness.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NaturalDisaster;