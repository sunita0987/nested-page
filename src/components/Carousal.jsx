import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
const slides = [
  {
    title: "Flower",
    image: "/images/flower1.jpg ",
  },
  {
    title: "Rose ",
    image: "/images/flower2.jpg ",
  },
  {
    title: " Beautiful Image",
    image: "/images/bestimg.jpg",
  },
];

export default function Carousel() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 500 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden ">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-56 object-cover rounded-sm-lg "
              />
              <div className="p-4 bg-green-700 rounded-b-xl border-t-5 border-gray-700">
                <h2 className="text-xl font-semibold text-white ">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
