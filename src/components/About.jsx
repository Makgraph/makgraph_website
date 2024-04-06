import React from "react";
import logoMakgraph from "../assets/logo_Makgraph.png";

const About = () => {
  return (
    <div className="p-screen">
      <div className="grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-2">
        <div className="w-auto h-auto pt-20 flex justify-center md:justify-center items-center ">
          <div>
            <img
              className=" flex max-w-[287px] max-h-[222px]"
              src={logoMakgraph}
            />
          </div>
        </div>
        <div className="mt-8 md:mt-20">
          <h2>Makgraph</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet nec dolor est sem
            feugiat. Enim viverra pellentesque fringilla turpis feugiat
            consectetur. Arcu nunc mauris enim lacus felis. Amet dui urna
            hendrerit morbi in accumsan. Ipsum varius mi sit egestas. Turpis
            amet malesuada nec nulla quis tortor tortor imperdiet aenean.Lorem
            ipsum dolor sit amet consectetur. Amet nec dolor est sem feugiat.
            <br />
            Enim viverra pellentesque fringilla turpis feugiat consectetur. Arcu
            nunc mauris enim lacus felis. Amet dui urna hendrerit morbi in
            accumsan. Ipsum varius mi sit egestas. Turpis amet malesuada nec
            nulla quis tortor tortor imperdiet aenean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
