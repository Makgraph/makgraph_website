import React from "react";
import logoMakgraph from "/assets/logo_Makgraph.png";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="p-screen py-8 md:pt-16">
        <div className="grid grid-cols-1 md:gap-2 md:grid-cols-2">
          <div className="w-auto h-auto pt-20 flex justify-center md:justify-center items-center ">
            <div>
              <img
                className=" flex w-[116px] h-[90px] md:min-w-[287px] md:min-h-[222px]"
                src={logoMakgraph}
              />
            </div>
          </div>
          <div className="mt-6 md:mt-20">
            <h2 className="font-serif">Makgraph</h2>
            <div>
              <p className="font-serif pb-5 font-sm md-font-base">
                Bienvenue sur mon site ! Je suis un artiste peintre passionné
                évoluant depuis de nombreuses années dans le domaine de la
                peinture sur textile. Ma spécialité réside dans la création
                d'œuvres uniques directement appliquées sur des t-shirts, des
                chemises et même des chaussures. Chaque pièce que je réalise est
                le fruit d'un travail entièrement manuel, ce qui garantit à mes
                clients des créations authentiques et personnalisées.
              </p>
              <p className="font-serif pb-5 font-sm md-font-base">
                Je travaille principalement sur commande, permettant ainsi à mes
                clients de participer activement au processus créatif en
                choisissant les motifs, les couleurs et les types de vêtements.
                Mon objectif est de fournir des pièces uniques qui reflètent non
                seulement mon style artistique, mais aussi la personnalité et
                les préférences de mes clients. À travers ce site, je souhaite
                partager mes créations avec vous.
              </p>
              <p className="font-serif pb-5 font-sm md-font-base">
                Explorez mes œuvres dans la galerie et n'hésitez pas à me
                contacter pour toute demande spécifique ou pour passer commande.
                Je suis toujours ravi de discuter de nouveaux projets et de
                collaborer pour créer des pièces uniques qui vous correspondent.
                Merci de visiter mon site et j'espère avoir le plaisir de
                collaborer avec vous bientôt !
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
