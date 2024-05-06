import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/black_t-shirt_2.png";
import slide_image_2 from "../assets/white_t-shirt_2.png";
import slide_image_3 from "../assets/blue_t-shirt_1.jpg";
import slide_image_4 from "../assets/white_t-shirt_3.png";
import slide_image_5 from "../assets/white_t-shirt_4.png";
import slide_image_6 from "../assets/black_t-shirt_3.png";
import slide_image_7 from "../assets/black_t-shirt_4.png";

const Gallery = () => {
  return (
    // <div className="max-w-[124rem] px-8 py-4 mx-0 my-auto">
    <div className="p-screen" id="gallerie">
      <h1 className="font-bold pb-4 md:flex hidden justify-center text-center pt-20">
        Travaux de Makgraph
      </h1>
      {/* <header className="mt-20 flex justify-center items-center ">
        <h1>Travaux de Makgraph</h1>
      </header> */}
      <h4 className="font-bold pb-6 md:hidden  text-center pt-20">
        Travaux de Makgraph
      </h4>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] md:relative rounded-2xl md:rounded-2xl">
          <img
            className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] rounded-2xl md:rounded-2xl md:object-cover"
            src={slide_image_1}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] md:relative rounded-2xl md:rounded-2xl">
          <img
            className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] rounded-2xl md:rounded-2xl md:object-cover"
            src={slide_image_2}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] md:relative rounded-2xl md:rounded-2xl">
          <img
            className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] rounded-2xl md:rounded-2xl md:object-cover"
            src={slide_image_3}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] md:relative rounded-2xl md:rounded-2xl">
          <img
            className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] rounded-2xl md:rounded-2xl md:object-cover"
            src={slide_image_4}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] md:relative rounded-2xl md:rounded-2xl">
          <img
            className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] rounded-2xl md:rounded-2xl md:object-cover"
            src={slide_image_5}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] md:relative rounded-2xl md:rounded-2xl">
          <img
            className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] rounded-2xl md:rounded-2xl md:object-cover"
            src={slide_image_6}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] md:relative rounded-2xl md:rounded-2xl">
          <img
            className="w-[230px] h-[277px]  md:w-[254px] md:h-[284px] rounded-2xl md:rounded-2xl md:object-cover"
            src={slide_image_7}
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler ">
          <div className="swiper-button-prev  after:content-['']">
            <div className="slider-arrow">
              <div className="ion-icon">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className="swiper-button-next after:content-['']">
            <div className="slider-arrow">
              <div className="ion-icon">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        {/* <div className="slider-controler ">
          <div className="swiper-button-prev  after:content-['']">
            <ion-icon size="large" name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next after:content-['']">
            <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
          </div>

          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
};

export default Gallery;
