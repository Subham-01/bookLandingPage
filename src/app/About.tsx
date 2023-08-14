import React from 'react';

const About = () => {
    return (
        <section className="body-font px-4 lg:px-20 ">
            <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 sm:pr-5 md:pr-8 relative  flex flex-col md:items-start md:text-left mb-16 md:mb-0  ">
                    <p className='text-dimText border-b-2 border-primary w-full capitalize pb-1'>
                    What You Can Expect:
                    </p>
                    <h1 className=" sm:text-4xl lg:text-6xl mt-6 text-left text-3xl mb-4 font-medium text-white ">
                    Reignite:<br /> The 30-Day <br /> Love Revival
                    

                    </h1>
                    <p className="mb-8 leading-relaxed text-dimText text-sm">By: Nova Bliss</p>

                    <p className="text-sm lg:text-lg font-semibold text-gray-300 mt-2  mb-8 w-full ">
                        
                    Each day, you`&apos;`ll engage in activities that nurture your relationship`&apos;`s growth, foster vulnerability, and foster a deeper connection. By the end of these 30 days, you`&apos;`ll have the tools to embrace a brighter future together.

Don`&apos;`t let time, routine, or misunderstandings dim the love you share. Take the first step towards rekindling the love that brought you together in the first place. Start your 30-day journey today.</p>

                    <p className='h-[2px] bg-primary w-full capitalize '>

                    </p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex items-center justify-center px-4  py-10 lg:p-24">
                    <img className="object-cover object-center rounded w-full" alt="hero" src="assets/hero.jpg" />
                </div>
            </div>
        </section>
    );
};

export default About;