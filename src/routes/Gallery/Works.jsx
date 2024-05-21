import React from "react";

export default function Works(props) {
  const { productImage } = props.data;

  return (
    <div className="">
      <div className="rounded w-auto h-auto flex flex-col transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-125  duration-300 cursor-pointer ">
        <img src={productImage} className="w-auto rounded " />
      </div>
    </div>
  );
}
