import React from 'react';

const Author = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex lg:items-center justify-center px-4  py-10 lg:p-24 bg-primary">
                    <img className="object-cover object-center rounded w-full h-96" alt="hero" src="assets/hero.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0  sm:ml-5 lg:ml-8 mt-10 lg:mt-0">
                    <p className='text-dimText border-b-2 border-primary w-full capitalize pb-1'>
                        AUTHOR
                    </p>
                    <h1 className=" sm:text-4xl lg:text-6xl mt-6 text-left text-3xl mb-4 font-medium text-white ">
                        SECRET OF<br />
                        MANHATTAN

                    </h1>
                    <p className="mb-8 leading-relaxed text-dimText text-sm">WRITER NAME</p>

                    <p className="text-sm lg:text-lg font-semibold text-gray-300 mt-2  mb-8 w-full ">
                        Neutra shabby chic ramps, viral fixie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium, autem corrupti enim quis hic est doloremque veniam iste, omnis, suscipit minus repudiandae. Odit consequatur nulla nobis quam corporis impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas, repellendus ratione voluptatem animi voluptates minus sapiente quis odit ipsam laborum excepturi illo necessitatibus natus. Quas adipisci incidunt voluptate sed ?</p>


                    <p className='h-[2px] bg-primary w-full capitalize '> </p>
                </div>
            </div>
        </section>
    );
};

export default Author;