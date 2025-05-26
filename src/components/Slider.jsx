import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
const slides = [
  {
    title: 'Beautiful Mountain',
    image: 'public/images/flower1.jpg ',
  },
  {
    title: 'Serene Beach',
    image: 'public/images/flower2.jpg ',
  },
  {
    title: 'City Lights',
    image: 'public/images/flower3.jpg',
  },
];

export default function Carousel() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay:1000 }}
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
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold text-gray-800">{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

