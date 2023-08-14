'use client'
import BasicButton from '@/components/BasicButton';
import React from 'react';

const Review = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex lg:items-center justify-center px-4  py-10 lg:p-24 bg-primary h-full">
                    <img className="object-cover object-center rounded w-full h-96" alt="hero" src="assets/hero.jpg" />
                </div>
                <div className="lg:flex-grow w-full md:w-1/2 sm:pl-5 lg:pl-8  flex flex-col md:items-start md:text-left items-center text-center mt-10 lg:mt-0">
                    <p className='text-dimText border-b-2 border-primary w-full capitalize pb-1'>
                        BUY
                    </p>
                    <h1 className="title-font sm:text-5xl mt-6 text-3xl  font-medium text-white mb-16">
                        FILL THE FORM
                    </h1>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5 w-full"
                    >
                        <div>

                            <input
                                type="text"
                                required
                                placeholder='First Name'
                                className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                required
                                placeholder='Last Name'
                                className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                required
                                placeholder='Phone'
                                className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                required
                                placeholder='Email'
                                className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                            />
                        </div>


                        <div className='w-full'>
                            <BasicButton title='Submit' width='full' />
                        </div>


                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;