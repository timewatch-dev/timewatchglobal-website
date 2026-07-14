"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

export default function BannerSwiper() {
  return (
   <div className="relative">
       <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      
      speed={1500}
      autoplay={false}
      // autoplay={{
      //   delay: 10000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
      // loop={false}
      className="w-full h-full"
    >
      <SwiperSlide>
        <div className="bg-gray-50 overflow-hidden">
          <div className="container h-[80vh] flex items-center">
            <div className="flex-1 flex flex-col justify-center ">
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                TrueFace Series Device
                <br />
                <span className="text-secondary"> with 2 Year Waranty</span>
              </h1>
              <hr className="w-1/3 rounded-2xl h-2 bg-primary border-0" />
              <p className="text-xl text-gray-600 leading-relaxed max-w-[500px] mt-5">
                Revolutionary biometric time attendance system with advanced HRM
                integration. Transform your workforce management with
                cutting-edge technology.
              </p>

              <div className="relative max-w-[400px] h-[100px]  flex items-start mt-9">
                <Image
                  fill
                  src="/images/sliders/home/Features-icon.png"
                  alt="time-attendance-and-access-controll"
                  className="object-contain mr-auto brightness-0 contrast-200"
                  quality={100}
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[300px] md:h-[500px] lg:h-[500px]">
                {/* Main Image */}
                <Image
                  fill
                  src="/images/sliders/home/trueface-products.png"
                  alt="time-attendance-and-access-controll"
                  className="object-contain"
                  quality={100}
                  priority
                  sizes="100vw"
                />

                {/* Reflection */}
                <div className="absolute bottom-[-40%] left-0 right-0 h-[50%] w-full overflow-hidden pointer-events-none">
                  <Image
                    fill
                    src="/images/sliders/home/trueface-products.png"
                    alt="reflection"
                    className="object-cover opacity-25 blur-sm scale-y-[-1]"
                    quality={100}
                    sizes="100vw"
                  />
                  {/* Fade gradient to blend reflection */}
                  <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] xl:h-screen">
          <Image
            fill
            src="/images/sliders/home/time-attendance-and-access-controll.jpg"
            alt="time-attendance-and-access-controll"
            className="object-cover"
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[300px] md:h-[500px] lg:h-[600px] xl:h-screen">
          <Image
            fill
            src="/images/sliders/home/geo-fencing.jpg"
            alt="True Face Series"
            className="w-full h-auto object-cover"
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
      </SwiperSlide>
    </Swiper>
   </div>
  );
}
