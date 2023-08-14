import React from 'react';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font lg:px-20 w-full">
            <div className="container mx-auto  lg:px-5 py-24 grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                <div className=" w-full mb-10 md:mb-0 px-4 lg:px-0">
                    <img className="object-cover object-center rounded w-full min-h-80 lg:min-h-96 h-full " alt="hero" src="assets/hero.jpg" />
                </div>
                <div className="w-full px-4 lg:px-0 col-span-3 lg:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-9xl text-center font-bold text-4xl mb-4  w-full text-white bg-primary lg:mx-4 py-4">
                        BUY
                    </h1>
                    <h1 className=' sm:text-[17rem] mt-4 lg:-mt-6  font-extrabold text-5xl mb-4  w-full text-white'>
                        BOOK
                    </h1>

                </div>
            </div>
        </section>
    );
};

export default Hero;