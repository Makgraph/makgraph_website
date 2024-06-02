import React from "react";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";
import { WhatsappLogo } from "phosphor-react";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="p-screen py-6 md:py-16" id="contact">
        <div className="grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-2">
          <div className="w-auto h-auto flex-col justify-center items-center pt-20 py-3 md:py-2 gap-2 inline-flex">
            <div>
              <h4 className="font-bold md:hidden">Pour plus info</h4>
              <h3 className="font-bold md:flex hidden">Pour plus info</h3>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <h5 className="md:hidden">Tel: (509) 3605 -1491</h5>
                <h4 className="md:flex hidden">Tel: (509) 3605 -1491</h4>
              </div>
              <div className="inline-flex justify-center items-center gap-2 ">
                <div>
                  <ion-icon
                    size="small flex md:hidden"
                    name="logo-whatsapp"
                  ></ion-icon>
                  <ion-icon
                    size="large md:flex hidden"
                    name="logo-whatsapp"
                  ></ion-icon>
                </div>
                <div>
                  <h5 className="md:hidden">Tel: (509) 3605 -1491</h5>
                  <h4 className="md:flex hidden">Tel: (509) 3605 -1491</h4>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="font-bold md:hidden">Suivez-nous</h4>
              <h3 className="font-bold md:flex hidden ">Suivez-nous</h3>
              <div className="w-auto h-auto justify-center items-center flex gap-3 ">
                <ion-icon name="logo-facebook" size="sm sm:hidden"></ion-icon>
                <ion-icon
                  size="large sm:flex hidden "
                  name="logo-facebook"
                ></ion-icon>
                <ion-icon name="logo-instagram" size="sm sm:hidden"></ion-icon>
                <ion-icon
                  size="large sm:flex hidden "
                  name="logo-instagram"
                ></ion-icon>
                <ion-icon name="logo-pinterest" size="sm sm:hidden"></ion-icon>
                <ion-icon
                  size="large sm:flex hidden "
                  name="logo-pinterest"
                ></ion-icon>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-8 shadow-lg md:mt-20">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
                  placeholder="Email"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>
              <div className="mt-4">
                <button className="btn-primary w-full">
                  <span className="labellg ">Envoyer mesage</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
