import React from "react";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoPinterest,
  logoWhatsapp,
} from "ionicons/icons";
import { WhatsappLogo } from "phosphor-react";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="p-screen py-6 md:py-16" id="contact">
        <div className="grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-2">
          <div className="w-auto h-auto flex-col justify-center items-center pt-20 py-3 md:py-2 gap-2 inline-flex">
            <div>
              <p className="font-bold font-serif text-lg md:text-2xl">
                Pour plus info
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <p className="font-medium font-serif text-lg md:text-2xl">
                  Tel: (509) 3605 -1491
                </p>
              </div>
              <div className="inline-flex justify-center items-center gap-2 ">
                <div>
                  <IonIcon
                    icon={logoWhatsapp}
                    className="text-onSurface text-lg md:text-3xl"
                  />
                </div>
                <div>
                  <p className="font-medium font-serif text-lg md:text-2xl">
                    Tel: (509) 3605 - 1234
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-bold font-serif text-lg md:text-2xl">
                Suivez-nous
              </p>
              <div className="w-auto h-auto justify-center items-center flex gap-3 ">
                <IonIcon
                  icon={logoFacebook}
                  className="text-onSurface text-lg md:text-3xl"
                />
                <IonIcon
                  icon={logoInstagram}
                  className="text-onSurface text-lg md:text-3xl"
                />
                <IonIcon
                  icon={logoPinterest}
                  className="text-onSurface text-lg md:text-3xl"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 md:p-8 shadow-lg md:mt-20">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full font-serif rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
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
                  className="w-full font-serif rounded-lg border-outline hover:bg-primary/10 disabled:bg-error disabled:text-error   p-3 text-sm"
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
                  className="w-full font-serif rounded-lg border-outline hover:bg-primary/5 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>
              <div className="mt-4">
                <button className="btn-primary w-full">
                  <span className="font-sans font-semibold">
                    Envoyer mesage
                  </span>
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
