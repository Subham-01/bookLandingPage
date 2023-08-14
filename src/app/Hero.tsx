import React from 'react';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font lg:px-20 w-full">
            <div className="container mx-auto  py-5 lg:px-5  lg:py-24 grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div className=" w-full mb-10 md:mb-0 px-4 lg:px-0">

                    <img className="object-cover object-center rounded w-full max-h-64 lg:max-h-96 h-full " alt="hero" src="assets/hero.jpg" />
                    <div className=' flex justify-centre ml-16 my-2'>
                        <button className='hover:bg-gray-900 hover:text-white my-4 p-2 px-6 btn btn-primary bg-pink-900 text-white '>Buy now</button>

                    </div>
                </div>
                <div className="w-full px-4 lg:px-0 col-span-3 lg:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font mt-8 lg:mt-0 sm:text-7xl lg:text-9xl text-center font-bold text-4xl mb-4  w-full text-white bg-primary lg:mx-4 py-4">
                        BUY
                    </h1>
                    <h1 className=' sm:text-6xl text-center lg:text-[17rem] mt-4 lg:-mt-6  font-extrabold text-5xl mb-4  w-full text-white'>
                        BOOK
                    </h1>

                </div>
            </div>
        </section>
    );
};

export default Hero;