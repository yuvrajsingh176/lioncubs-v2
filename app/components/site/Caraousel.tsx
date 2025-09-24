// app/components/Carousel.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Load react-slick only on client (prevents SSR issues)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

type Slide = {
  id: string | number;
  imageUrl: string;
  alt?: string;
  caption?: string;
};

export default function Carousel({ slides }: { slides: Slide[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    lazyLoad: "ondemand" as const, // lazy load images
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full h-full md:pt-[21px]  ">
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id} className="border ">
            <div className="relative  overflow-hidden">
              {/* Next/Image in a fixed aspect-box */}
              <div className="relative w-full flex justify-center h-full bg-gray/50"> {/* bg color shows behind */}
                <Image
                  src={s.imageUrl}
                  alt={s.alt ?? "slide"}
                  width={1000}
                  height={1000}
                  className="w-full md:w-fit  h-full"
                  style={{ objectFit: "contain" }} // shows whole image, may have empty bands
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
