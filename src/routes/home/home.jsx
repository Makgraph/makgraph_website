import React from "react";
import black_Tshirt_2 from "../../assets/black_t-shirt_2.png";
import whiteTshirt from "../../assets/white_t-shirt_2.png";
import blueTshirt from "../../assets/blue_t-shirt_1.jpg";
// import Header from "../Header.jsx";
import Slideshow from "./Slideshow.jsx";
import { FacebookLogo, InstagramLogo, PinterestLogo } from "phosphor-react";
import heroBg from "../../assets/hero_bg.png";
import Cart from "../shop/Cart.jsx";
import Shop from "../shop/Shop.jsx";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-20 md:mt-24 h-[100%]" id="home">
        <div className="p-screen  grid col-span-0 md:grid-cols-[100px_repeat(2,_1fr)]">
          <div className="h-auto hidden md:items-start justify-center md:flex flex-col md:gap-5 animate-slideInLeftFast ">
            {/* <img src={facebook} className="w-6 h-6 relative cursor-pointer" />
          <img src={instagram} className="w-6 h-6 relative" />
          <img src={pinterest} className="w-6 h-6 relative" /> */}
            <div className="cursor-pointer ">
              <FacebookLogo size={24} weight="fill" />
            </div>
            <div className="cursor-pointer">
              <InstagramLogo size={24} weight="fill" />
            </div>
            <div className="cursor-pointer">
              <PinterestLogo size={24} weight="fill" />
            </div>
          </div>

          <div className="w-auto h-auto col-span-2 md:col-span-1 md:max-h-[520px] pt-10 md:pt-0 flex-col justify-center gap-6 items-center inline-flex md:px-2">
            <div className="self-stretch justify-center items-center inline-flex animate-slideInLeftFast">
              <div className="grow shrink basis-0 text-[10px] text-center text-[#18181b] text-xs md:text-sm font-normal font-['Roboto'] leading-none tracking-wide">
                Bienvenue sur la page web de Makgraph
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex ">
              <div className="grow  shrink basis-0 text-center ">
                <div className="animate-slideInLeftSlow2">
                  <span className="text-black text-[34px] md:text-5xl font-bold font-['Roboto'] leading-[44px] ">
                    Design unique
                    <br />
                    sur vos maillots.
                    <br />
                  </span>
                </div>
                <div className="animate-slideInLeftSlow3">
                  <span className="text-black text-4xl font-normal font-['Roboto'] leading-[44px] animate-slideInLeftSlow4">
                    Fait à la main !!!
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a href="#gallerie" className="labelmd ">
                <div className="animate-slideInLeftSlow4">
                  <Link to="/Gallerie/2" className="cursor-pointer">
                    <button className="btn-icon animate-scalebtn">
                      Voir plus de modele
                      <span className="shrink-0 h-9 rounded-full border border-current bg-white p-2 text-primary group-active:text-primary">
                        <svg
                          className="size-5 rtl:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </a>
            </div>
          </div>

          <div className="h-auto w-auto col-span-2 md:col-auto">
            <div className="grid grid-cols-1 md:max-h-[520px] w-auto pt-12 md:bg-cover md:bg-center md:flex justify-center md:py-10 md:px-4 sm:py-2">
              <Slideshow />
            </div>
          </div>
        </div>
        {/* <div>
      <div className="p-screen">
        <div className="grid grid-cols-1 gap-4 md:max-h-[520px] md:gap-2 md:grid-cols-2">
          <div className="w-auto h-auto md:max-h-[520px] pt-10 md:pt-0 flex-col justify-center gap-6 items-center inline-flex md:px-2">
            <div className="self-stretch justify-center items-center inline-flex animate-slideInLeftFast">
              <div className="grow shrink basis-0 text-center text-zinc-900 text-xs md:text-sm font-normal font-['Roboto'] leading-none tracking-wide">
                Bienvenue sur la page web de Makgraph
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex ">
              <div className="grow  shrink basis-0 text-center ">
                <div className="animate-slideInLeftSlow2">
                  <span className="text-black text-4xl md:text-5xl font-bold font-['Roboto'] leading-[44px] ">
                    Design unique
                    <br />
                    sur vos maillots.
                    <br />
                  </span>
                </div>
                <div className="animate-slideInLeftSlow3">
                  <span className="text-black text-4xl font-normal font-['Roboto'] leading-[44px] animate-slideInLeftSlow4">
                    Fait à la main !!!
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a href="#gallerie" className="labelmd ">
                <div className="animate-slideInLeftSlow4">
                  <button className="btn-icon animate-scalebtn">
                    Voir plus de modele
                    <span className="shrink-0 h-9 rounded-full border border-current bg-white p-2 text-primary group-active:text-primary">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:max-h-[520px] w-auto gap-4  sm:gap-3   md:bg-cover md:bg-center md:flex md:gap-4 justify-center md:py-10 md:px-4 sm:py-2">
            <Slideshow />
          </div>
        </div>
      </div>
    </div> */}
      </div>
      <Footer />
    </div>
  );
}
