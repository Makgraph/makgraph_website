import React from "react";
import black_Tshirt_2 from "../assets/black_t-shirt_2.png";
import whiteTshirt from "../assets/white_t-shirt_2.png";
import blueTshirt from "../assets/blue_t-shirt_1.jpg";
import heroBg from "../assets/hero_bg.png";

const Home = () => {
  return (
    <section>
      {/* <section className="justify-center items-center"> */}
      <div className="p-screen">
        <div className="grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-2">
          <div className="w-auto h-auto pt-10 md:pt-0 flex-col justify-center gap-6 items-center inline-flex  md:px-2">
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="grow shrink basis-0 text-center text-zinc-900 text-xs md:text-sm font-normal font-['Roboto'] leading-none tracking-wide">
                Bienvenue sur la page web de Makgraph
              </div>
            </div>
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="grow shrink basis-0 text-center">
                <span className="text-black text-4xl md:text-5xl font-bold font-['Roboto'] leading-[44px]">
                  Design unique
                  <br />
                  sur vos maillots.
                  <br />
                </span>
                <span className="text-black text-4xl font-normal font-['Roboto'] leading-[44px]">
                  Fait à la main !!!
                </span>
              </div>
            </div>

            <div>
              <button className="btn-icon">
                <span className="labelmd ">Voir plus de modele</span>

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
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-3  md:bg-onSecondary md:flex md:justify-between md:py-8 h-auto w-auto sm:py-2"> */}
          <div className="grid grid-cols-1 h-auto w-auto gap-4 sm:grid-cols-3 sm:gap-3  md:bg-[url('./assets/hero_bg.png')] md:bg-cover md:bg-center md:flex md:gap-4 justify-center md:py-28 md:px-4 sm:py-2">
            <img
              className="basis-0 w-full h-[210px] xs:h-auto md:w-[216px] md:h-[270px] rounded-lg border border-[#155e75]"
              src={blueTshirt}
              alt=""
            />
            <img
              className="basis-0 w-full h-[210px] xs:h-auto md:w-[216px] md:h-[270px] rounded-lg border border-[#155e75]"
              src={black_Tshirt_2}
              alt=""
            />
            <img
              className="basis-0 w-full h-[210px] xs:h-auto md:hidden  rounded-lg border border-[#155e75]"
              src={whiteTshirt}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
