import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../assets/black_t-shirt_2.png";
import slide_image_3 from "../../assets/blue_t-shirt_1.jpg";
import slide_image_2 from "../../assets/white_t-shirt_2.png";
import slide_image_4 from "../../assets/white_t-shirt_3.png";
import slide_image_5 from "../../assets/white_t-shirt_4.png";
import slide_image_6 from "../../assets/black_t-shirt_3.png";
import slide_image_7 from "../../assets/black_t-shirt_4.png";
import Header from "../Header";
import Footer from "../Footer";
import Product from "../shop/Product";
import { PRODUCTS } from "../../product";
import Works from "./Works";

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="p-screen pt-20 md:pt-24">
        <div className="flex justify-center py-4 md:py-8 ">
          <h2>
            <b>Travaux de Makgraph</b>
          </h2>
        </div>
        <div>
          <div className=" py-1 gap-5 md:gap-5 items-center justify-center grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2">
            {PRODUCTS.map((product) => (
              <Works data={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
