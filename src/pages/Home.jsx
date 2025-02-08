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
            <section className="">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                    className="w-full h-screen"
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
                                        <div className="relative z-10 text-text-primary flex flex-col items-center gap-y-4 text-center w-[80vw]">
                                            <h2 className='text-3xl sm:text-3xl'>
                                                {item.name.toUpperCase()}
                                            </h2>
                                            <p className='text-center'>
                                                {item.description}
                                            </p>
                                            <Button text='View Recipe' height='h-[40px]'/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </section>
        </>
    );
};

export default Home;