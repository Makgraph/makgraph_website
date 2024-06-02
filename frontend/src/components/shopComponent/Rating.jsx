import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Star, StarHalf, UserCircle } from "phosphor-react";
// import Rating from "react-rating";

const Rating = ({ value, text }) => {
  return (
    <div className="md:flex ">
      <div className="flex">
        <div className="">
          {value >= 1 ? (
            <div className="w-auto h-auto">
              <Star size={20} weight="fill" />
            </div>
          ) : value >= 0.5 ? (
            <div className="w-auto h-auto">
              <StarHalf size={20} weight="fill" />
            </div>
          ) : (
            <div className="w-auto h-auto">
              <Star size={20} />
            </div>
          )}
        </div>
        <div className="">
          {value >= 2 ? (
            <Star size={20} weight="fill" />
          ) : value >= 1.5 ? (
            <StarHalf size={20} weight="fill" />
          ) : (
            <Star size={20} />
          )}
        </div>
        <div className="">
          {value >= 3 ? (
            <Star size={20} weight="fill" />
          ) : value >= 2.5 ? (
            <StarHalf size={20} weight="fill" />
          ) : (
            <Star size={20} />
          )}
        </div>
        <div className="">
          {value >= 4 ? (
            <Star size={20} weight="fill" />
          ) : value >= 3.5 ? (
            <StarHalf size={20} weight="fill" />
          ) : (
            <Star size={20} />
          )}
        </div>
        <div className="">
          {value >= 5 ? (
            <Star size={20} weight="fill" />
          ) : value >= 4.5 ? (
            <StarHalf size={20} weight="fill" />
          ) : (
            <Star size={20} />
          )}
        </div>
      </div>

      <div className="md:ml-4 flex justify-start">{text && text}</div>
    </div>
  );
};

export default Rating;
