import React, { useEffect, useRef, useState } from "react";
import blueTshirt from "/assets/blue_t-shirt_1.jpg";
import black_Tshirt_2 from "/assets/black_t-shirt_2.png";
import whiteTshirt from "/assets/white_t-shirt_2.png";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const colors = [
  { src: blueTshirt },
  { src: black_Tshirt_2 },
  { src: whiteTshirt },
];
const delay = 2500;
// const colors = [
//   <img src={black_Tshirt_2} />,
//   <img src={blueTshirt} />,
//   <img src={whiteTshirt} />,
// ];
function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="my-0 mx-auto overflow-hidden max-w-[324px] animate-slideInRight">
      <div
        className="whitespace-nowrap transition ease-linear duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((img, index) => (
          <img
            className="basis-0 w-full h-full xs:h-auto md:w-100% md:h-[405px] inline-block rounded-xl border border-[#155e75]"
            key={index}
            src={img.src}
          />
        ))}
      </div>
      <div className="text-center">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`bubble${index === idx ? " bg-primary" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
