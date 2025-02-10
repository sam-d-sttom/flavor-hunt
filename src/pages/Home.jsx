import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import data from "../utils/data";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '../components/common/Button';

const Home = () => {
    return (
        <>
            {/* Hero section */}
            <section className="mb-10">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                    className="w-full h-[400px]"
                >
                    {/* Each slide must be wrapped in a SwiperSlide component */}
                    {
                        data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-full bg-cover bg-center flex justify-around items-center"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="relative z-10 text-primary-color flex flex-col items-center gap-y-4 text-center w-[80vw]">
                                            <h2 className='text-3xl sm:text-3xl'>
                                                {item.name.toUpperCase()}
                                            </h2>
                                            <p className='text-center'>
                                                {item.description}
                                            </p>
                                            <Button text='View Recipe' height='h-[40px]' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </section>

            <div className='px-[3vw]'>
                {/* Trending Recipes */}
                <section className='mb-10'>
                    <h2 className='text-xl sm:text-2xl mb-6'>Trending Recipes</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center'>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[150px] w-full rounded-lg bg-red-500'></div>
                    </div>
                </section>

                {/* Quick meal */}
                <section className='mb-10'>
                    <h2 className='text-xl sm:text-2xl mb-6'>Quick Meals</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center'>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                    </div>
                </section>

                {/* For the kids */}
                <section className='mb-10'>
                    <h2 className='text-xl sm:text-2xl mb-6'>For The Kids</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center'>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                    </div>
                </section>

                {/* Vegan */}
                <section className='mb-10'>
                    <h2 className='text-xl sm:text-2xl mb-6'>Vegan</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center'>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                        <div className='h-[200px] w-full rounded-lg bg-red-500'></div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;