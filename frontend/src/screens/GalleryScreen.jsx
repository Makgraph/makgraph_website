import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

// import slide_image_1 from "../../assets/black_t-shirt_2.png";
// import slide_image_3 from "../../assets/blue_t-shirt_1.jpg";
// import slide_image_2 from "../../assets/white_t-shirt_2.png";
// import slide_image_4 from "../../assets/white_t-shirt_3.png";
// import slide_image_5 from "../../assets/white_t-shirt_4.png";
// import slide_image_6 from "../../assets/black_t-shirt_3.png";
// import slide_image_7 from "../../assets/black_t-shirt_4.png";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";
// import Product from "../components/shopComponent/Product";
import { PRODUCTS } from "../data/product";
// import Works from "../components/galleryComponent/Works";

const GalleryScreen = () => {
  return (
    <div>
      <Header />
      <div className="p-screen pt-20 md:pt-24">
        <div className="md:flex hidden justify-center py-4 md:py-8 ">
          <h2>
            <b>Travaux de Makgraph</b>
          </h2>
        </div>
        <div className="md:hidden flex justify-center py-4 md:py-8 ">
          <h4>
            <b>Travaux de Makgraph</b>
          </h4>
        </div>
        <div>
          <div className=" py-1 gap-5 md:gap-5 items-center justify-center grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2">
            {PRODUCTS.map((product) => (
              // <Works data={product} />
              <div className="rounded w-auto h-auto flex flex-col transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-125  duration-300 cursor-pointer ">
                <img src={product.productImage} className="w-auto rounded " />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryScreen;
