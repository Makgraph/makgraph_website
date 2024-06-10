import React from "react";
import { FacebookLogo, InstagramLogo, PinterestLogo } from "phosphor-react";
import monCash from "/assets/moncash.png";
import paypal from "/assets/paypal.png";

export default function Footer() {
  return (
    <div className="p-screen py-12">
      <div className="grid md:grid-cols-2 gap-5 py-8 ">
        <div className=" gap-3 flex flex-col">
          <h6>
            <b>Entrer en Contact</b>
          </h6>
          <h6>makgraph@gmail.com</h6>
          <h6>+509-3604-3023</h6>
        </div>
        <div className="flex flex-col">
          <div>
            <h6 className="pb-4">
              <b>Lettre d'information</b>
            </h6>
            <h6>
              Pour les Promotions, nouveaux produits et ventes. Directement dans
              votre boîte de réception.
            </h6>
          </div>
          <form
            action="#"
            className=" mt-4 gap-1 grid grid-cols-[8fr_repeat(1,_2fr)] w-100%"
          >
            <div>
              <label className="sr-only" htmlFor="email">
                Name
              </label>
              <input
                className="w-full rounded-md border-[1px] border-primary hover:bg-primary/5 p-2 text-sm"
                placeholder="Email"
                type="email"
                id="foremail"
              />
            </div>

            <div className="">
              <button className="w-100% inline-block items-center justify-center rounded-md bg-primary py-2 px-3 text-sm font-medium text-onPrimary transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                <span className="labellg ">S'inscrire</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center py-4 border-t-[1px] border-b-[1px] border-primary/15">
        <div className="cursor-pointer px-2 ">
          <FacebookLogo size={24} weight="fill" />
        </div>
        <div className="cursor-pointer px-2">
          <InstagramLogo size={24} weight="fill" />
        </div>
        <div className="cursor-pointer px-2">
          <PinterestLogo size={24} weight="fill" />
        </div>
      </div>
      <div className="flex justify-between py-2">
        <h6>@ 2024 designed by makgraph</h6>
        <div className="flex gap-4">
          <img src={paypal} alt="moncash" className="w-12 h-8 " />
          <img src={monCash} alt="moncash" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
