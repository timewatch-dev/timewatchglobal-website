"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerSwiper() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        speed={1500}
        autoplay={false}
        className="w-full"
      >
                {/* --------------------------------------------------- */}
        {/* SLIDE – 3 */}
        {/* --------------------------------------------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">

              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    TrueFace Series Device{" "}
                    <span className="text-secondary">with 2 Year Warranty</span>
                  </h1>

                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    Revolutionary biometric attendance system with advanced HRM
                    integration.
                  </p>
                </div>

                <div className="relative max-w-[400px] h-[100px] mt-9 hidden md:block">
                  <Image
                    src="/images/sliders/home/Features-icon.png"
                    alt="Features"
                    fill
                    className="object-contain brightness-0 contrast-200"
                    quality={95}
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </div>
              </div>

              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[280px] h-[190px] md:w-[600px] md:h-[500px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/trueface-products.png"
                    alt="time-attendance-device"
                    fill
                    className="object-contain"
                    quality={95}
                    priority
                    sizes="(max-width: 768px) 80vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* --------------------------------------------------- */}
        {/* SLIDE – 1 */}
        {/* --------------------------------------------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">

              {/* LEFT CONTENT */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    AI Based X-Ray{" "}
                    <span className="text-secondary">Baggage Scanner</span>
                  </h1>

                  <hr className="w-1/3 rounded-2xwhatsapp-colorl h-1.5 mt-2 md:h-2 bg-primary border-0 " />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    We provide customized model solutions for our AI X-Ray baggage
                    scanner, including software customization and barcode integration.
                  </p>
                </div>

                <div className="relative max-w-[500px] h-[100px] mt-5 hidden md:block">
                  <Image
                    src="/images/sliders/home/baggage-features.png"
                    alt="baggage-features"
                    fill
                    className="object-contain"
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[310px] h-[190px] md:w-[600px] md:h-[500px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/baggage.png"
                    alt="baggage scanner"
                    fill
                    className="object-contain"
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 80vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* --------------------------------------------------- */}
        {/* SLIDE – 2 */}
        {/* --------------------------------------------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">

              {/* LEFT CONTENT */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    App Download Now <br />
                    <span className="text-secondary">Client Connect</span>
                  </h1>

                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    Client Connect lets customers log complaints, track progress,
                    and enjoy faster support.
                  </p>

                  <Image
                    src="/images/sliders/home/client-search-bar.png"
                    alt="client-search-bar"
                    width={180}
                    height={75}
                    className="object-contain mt-2"
                    quality={90}
                    priority
                  />
                </div>

                {/* APP BUTTONS */}
                <div className="relative max-w-[400px] h-[100px] mt-4 hidden md:flex gap-x-4">
                  <a
                    href="https://apps.apple.com/in/app/timewatch-client-connect/id6752843505"
                    target="_blank"
                  >
                    <Image
                      src="/images/sliders/home/client-connect-app-store.png"
                      alt="client-connect-app-store"
                      width={110}
                      height={110}
                      className="object-contain border p-2"
                      quality={95}
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.clientConnect.com"
                    target="_blank"
                  >
                    <Image
                      src="/images/sliders/home/eve-play-store.png"
                      alt="play-store"
                      width={110}
                      height={110}
                      className="object-contain border p-2"
                      quality={95}
                    />
                  </a>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[300px] h-[200px] md:w-[800px] md:h-[500px] 2xl:w-[1000px]">
                  <Image
                    src="/images/sliders/home/client-phone.png"
                    alt="Client Connect App"
                    fill
                    className="object-contain"
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 80vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>



        {/* --------------------------------------------------- */}
        {/* SLIDE – 4 */}
        {/* --------------------------------------------------- */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">

              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    Simple way to <br />
                    <span className="text-secondary">Monitor Your Employee</span>
                  </h1>

                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />

                  <p className="text-md md:text-lg text-gray-600 mt-5 leading-relaxed">
                    Monitor employees with geo-fencing for accurate attendance and tracking.
                  </p>
                </div>

                <div className="relative max-w-[400px] h-[100px] mt-4 hidden md:flex gap-4">
                  <a
                    href="https://apps.apple.com/in/app/timewatch-mobile-attendance/id6482852039"
                    target="_blank"
                  >
                    <Image
                      src="/images/sliders/home/app-store.png"
                      alt="app-store"
                      width={110}
                      height={110}
                      className="object-contain border p-2"
                      quality={95}
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.evetimewatch"
                    target="_blank"
                  >
                    <Image
                      src="/images/sliders/home/play-store.png"
                      alt="play-store"
                      width={110}
                      height={110}
                      className="object-contain border p-2"
                      quality={95}
                    />
                  </a>
                </div>
              </div>

              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[500px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/mobile-applications.png"
                    alt="mobile-applications"
                    fill
                    className="object-contain"
                    quality={95}
                    priority
                    sizes="(max-width: 768px) 80vw, 50vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
