import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import React from 'react';

const slides = [
  {
    title: "flower",
    img: "src/assets/images/flower1.jpg",
  },
  {
    title: "rose",
    img: "src/assets/images/flower2.jpg",
  },
  {
    title: "Beach",
    img: "src/assets/images/flower3.jpg",
  },
];

const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center font-semibold">{slide.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
