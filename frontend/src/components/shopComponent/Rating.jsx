import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Star, StarHalf, UserCircle } from "phosphor-react";
// import Rating from "react-rating";

const Rating = ({ value, text }) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="flex h-4 w-4 pt-1 gap-1">
        <div className="h-4 w-4">
          {value >= 1 ? (
            <div className="w-auto h-auto">
              <Star size={20} color="#ddd45a" weight="fill" />
            </div>
          ) : value >= 0.5 ? (
            <div className="w-auto h-auto">
              <StarHalf size={20} color="#ddd45a" weight="fill" />
            </div>
          ) : (
            <div className="w-auto h-auto">
              <Star size={20} color="#ddd45a" />
            </div>
          )}
        </div>
        <div className="h-4 w-4">
          {value >= 2 ? (
            <Star size={20} color="#ddd45a" weight="fill" />
          ) : value >= 1.5 ? (
            <StarHalf size={20} color="#ddd45a" weight="fill" />
          ) : (
            <Star size={20} color="#ddd45a" />
          )}
        </div>
        <div className="h-4 w-4">
          {value >= 3 ? (
            <Star size={20} color="#ddd45a" weight="fill" />
          ) : value >= 2.5 ? (
            <StarHalf size={20} color="#ddd45a" weight="fill" />
          ) : (
            <Star size={20} color="#ddd45a" />
          )}
        </div>
        <div className="h-4 w-4">
          {value >= 4 ? (
            <Star size={20} color="#ddd45a" weight="fill" />
          ) : value >= 3.5 ? (
            <StarHalf size={20} color="#ddd45a" weight="fill" />
          ) : (
            <Star size={20} color="#ddd45a" />
          )}
        </div>
        <div className="h-4 w-4">
          {value >= 5 ? (
            <Star size={20} color="#ddd45a" weight="fill" />
          ) : value >= 4.5 ? (
            <StarHalf size={20} color="#ddd45a" weight="fill" />
          ) : (
            <Star size={20} color="#ddd45a" />
          )}
        </div>
      </div>

      <div className="">{text && text}</div>
    </div>
  );
};

export default Rating;
