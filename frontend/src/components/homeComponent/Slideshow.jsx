import React, { useEffect, useRef, useState } from "react";
import BlacTshirt from "/assets/Black_tshirt_JGC.png";
import black_Tshirt_2 from "/assets/black_t-shirt_2.png";
import GrayTshirt from "/assets/Gray_tshirt_JGC.png";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const colors = [
  { src: BlacTshirt },
  { src: black_Tshirt_2 },
  { src: GrayTshirt },
];
const delay = 2500;
// const colors = [
//   <img src={black_Tshirt_2} />,
//   <img src={BlacTshirt} />,
//   <img src={GrayTshirt} />,
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
            className="basis-0 w-full h-full xs:h-auto md:w-100% md:h-[405px] inline-block rounded-xl "
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
