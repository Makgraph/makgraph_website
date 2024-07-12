import React from "react";
import { Link } from "react-router-dom";
import { FacebookLogo, InstagramLogo, PinterestLogo } from "phosphor-react";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoPinterest,
  logoWhatsapp,
} from "ionicons/icons";
import Slideshow from "./Slideshow.jsx";

const HeroSection = () => {
  return (
    <div className="mt-20 md:mt-24 h-[100%]">
      <div className="p-screen grid md:grid-cols-[100px_repeat(2,_1fr)]">
        <div className="h-auto hidden md:items-start justify-center md:flex md:flex-col md:gap-5 animate-slideInLeftFast ">
          <IonIcon
            icon={logoFacebook}
            className="cursor-pointer text-onSurface text-lg md:text-2xl"
          />
          <IonIcon
            icon={logoInstagram}
            className="cursor-pointer text-onSurface text-lg md:text-2xl"
          />
          <IonIcon
            icon={logoPinterest}
            className="cursor-pointer text-onSurface text-lg md:text-2xl"
          />
        </div>

        <div className="w-auto h-auto col-span-2 md:col-span-1 md:max-h-[520px] pt-5 md:pt-0 flex-col justify-center  md:gap-6 items-center inline-flex md:px-2">
          <div className="self-stretch justify-center items-center inline-flex animate-slideInLeftFast">
            <div className="flex flex-col">
              <div className="h-auto md:hidden md:items-start justify-center flex  md:gap-5 animate-slideInLeftFast ">
                <div className="w-auto h-auto justify-center items-center flex gap-3 ">
                  <IonIcon
                    icon={logoFacebook}
                    className="text-onSurface pb-2 text-lg md:text-3xl"
                  />
                  <IonIcon
                    icon={logoInstagram}
                    className="text-onSurface pb-2 text-lg md:text-3xl"
                  />
                  <IonIcon
                    icon={logoPinterest}
                    className="text-onSurface pb-2 text-lg md:text-3xl"
                  />
                </div>
              </div>
              <div className="grow shrink basis-0 text-[10px]  text-center text-[#18181b] text-xs md:text-base font-normal font-sans leading-none tracking-wide">
                Bienvenue sur la page web de Makgraph
              </div>
            </div>
          </div>
          <div className="self-stretch justify-center items-center inline-flex ">
            <div className="grow  shrink basis-0 text-center ">
              <div className="animate-slideInLeftSlow2">
                <p className="text-onSurface text-3xl md:text-5xl font-bold font-sans">
                  Design unique
                  <br />
                  sur vos maillots.
                  <br />
                </p>
              </div>
              <div className="animate-slideInLeftSlow3">
                <span className="text-onSurface text-2xl md:text-4xl font-normal font-sans leading-[40px] animate-slideInLeftSlow4">
                  Fait à la main !!!
                </span>
              </div>
            </div>
          </div>

          <div>
            <Link href="#gallerie" className="labelmd ">
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
            </Link>
          </div>
        </div>

        <div className="h-auto w-auto col-span-2 md:col-auto">
          <div className="grid grid-cols-1 md:max-h-[520px] w-auto pt-12 md:bg-cover md:bg-center md:flex justify-center md:py-10 md:px-4 sm:py-2">
            <Slideshow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
