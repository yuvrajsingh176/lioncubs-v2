"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cubs = [
  { image: "/minicubs.webp" },
  { image: "/juniorcubs.webp" },
  { image: "/supercubs.webp" },
];

const CaraouselHero = () => {
  return (
    <div className="relative py-10 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1} // 🔹 Always show only ONE slide
          navigation
          pagination={{ clickable: true }}
          loop={true}
          style={{ paddingBottom: "2.5rem" }} // space for dots
        >
          {cubs.map((cub, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
                  <Image
                    src={cub.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-contain bg-white" // 🔹 Keep whole image visible
                    sizes="100vw"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CaraouselHero;
